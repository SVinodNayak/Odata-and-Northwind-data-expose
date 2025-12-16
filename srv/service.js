const cds = require("@sap/cds");
const axios = require("axios");
const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");

module.exports = cds.service.impl(async function () {

  const { Customers, POHEADER, POITEMS } = this.entities;


  /* =========================================================
     READ Customers – Northwind (External, GET ONLY)
  ========================================================= */
  this.on("READ", Customers, async () => {

    const url =
      "https://services.odata.org/northwind/northwind.svc/Customers?$format=json";

    const response = await axios.get(url);

    return response.data.value.map(c => ({
      CustomerID:   c.CustomerID,
      CompanyName:  c.CompanyName,
      ContactName:  c.ContactName,
      ContactTitle: c.ContactTitle,
      Address:      c.Address,
      City:         c.City,
      Region:       c.Region,
      PostalCode:   c.PostalCode,
      Country:      c.Country,
      Phone:        c.Phone,
      Fax:          c.Fax
    }));
  });

  this.on("READ", "KNA1", async () => {

    const response = await executeHttpRequest(
      { destinationName: "remote" },
      { method: "GET", url: "/Z301636ODATASet?$format=json" }
    );

    return response.data.d.results.map(r => ({
      Kunnr: r.Kunnr,
      Name:  r.Name,
      Ort01: r.Ort01,
      Pstlz: r.Pstlz
    }));
  });

  /* =========================================================
     POHEADER – Before CREATE
  ========================================================= */
  this.before("CREATE", POHEADER, req => {

    if (!req.data.PONumber) req.reject(400, "PO Number is mandatory");
    if (!req.data.Vendor)   req.reject(400, "Vendor is mandatory");

    req.data.Status ??= "Pending";
    req.data.OrderDate ??= new Date();
  });

  /* =========================================================
     POITEMS – Before CREATE
  ========================================================= */
  this.before("CREATE", POITEMS, req => {

    if (!req.data.POID)     req.reject(400, "POID is mandatory");
    if (!req.data.Material) req.reject(400, "Material is mandatory");

    if (!req.data.Quantity || req.data.Quantity <= 0)
      req.reject(400, "Quantity must be > 0");

    if (!req.data.Price || req.data.Price <= 0)
      req.reject(400, "Price must be > 0");
  });

  /* =========================================================
     POITEMS – Block UPDATE if PO Approved
  ========================================================= */
  this.before("UPDATE", POITEMS, async req => {

    const tx = cds.tx(req);

    const item = await tx.run(
      SELECT.one.from(POITEMS).where({ POItemID: req.data.POItemID })
    );
    if (!item) return;

    const po = await tx.run(
      SELECT.one.from(POHEADER).where({ POID: item.POID })
    );

    if (po?.Status === "Approved") {
      req.reject(409, "Cannot modify items of an approved PO");
    }
  });

  /* =========================================================
     POHEADER – After READ (Derived Field)
  ========================================================= */
  this.after("READ", POHEADER, data => {

    (Array.isArray(data) ? data : [data]).forEach(po => {
      po.StatusText =
        po.Status === "Approved"
          ? "Approved"
          : "Pending Approval";
    });
  });

  /* =========================================================
     POHEADER – UPDATE / DELETE protection
  ========================================================= */
  this.on(["UPDATE", "DELETE"], POHEADER, async req => {

    const tx = cds.tx(req);
    const po = await tx.run(
      SELECT.one.from(POHEADER).where({ POID: req.data.POID })
    );

    if (po?.Status === "Approved") {
      req.reject(409, "Approved PO cannot be modified");
    }

    return tx.run(req.query);
  });

  /* =========================================================
     Action – Approve PO
  ========================================================= */
  this.on("approvePO", async req => {

    if (!req.user.is("ManagerRole")) {
      req.reject(403, "Only Manager can approve PO");
    }

    const tx = cds.tx(req);

    const po = await tx.run(
      SELECT.one.from(POHEADER).where({ POID: req.data.POID })
    );

    if (!po) req.reject(404, "PO not found");
    if (po.Status === "Approved") return "Already Approved";

    await tx.run(
      UPDATE(POHEADER)
        .set({ Status: "Approved" })
        .where({ POID: req.data.POID })
    );

    return "PO Approved Successfully";
  });

  /* =========================================================
     Function – Get Total Amount
  ========================================================= */
  this.on("getTotalAmount", async req => {

    const tx = cds.tx(req);

    const items = await tx.run(
      SELECT.from(POITEMS)
        .columns("Quantity", "Price")
        .where({ POID: req.data.POID })
    );

    return items.reduce(
      (sum, i) => sum + i.Quantity * i.Price,
      0
    );
  });

});
