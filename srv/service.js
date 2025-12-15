const cds = require("@sap/cds");
const axios = require("axios");
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');

module.exports = cds.service.impl(async function () {

  this.on("READ", "Customers", async () => {

    const url = "https://services.odata.org/northwind/northwind.svc/Customers?$format=json";

    const response = await axios.get(url);
    const results = response.data.value;

    return results.map(c => ({
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

    this.on("READ","KNA1",async () =>{
        const response = await executeHttpRequest(
            { destinationName: "remote" },
            { method: "GET", url: "/Z301636ODATASet?$format=json" });
  
        const data = response.data.d.results;
        return data.map(r => ({
          Kunnr: r.Kunnr,  
          Name: r.Name,
            Ort01: r.Ort01,
            Pstlz: r.Pstlz,
          }));
          
          
        
    });
  });