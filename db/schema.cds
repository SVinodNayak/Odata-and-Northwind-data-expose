namespace TASKODATA.db;

entity Customers {
    key CustomerID    : String(10);
    CompanyName   : String(100);
    ContactName   : String(100);
    ContactTitle  : String(100);
    Address       : String(200);
    City          : String(100);
    Region        : String(100);
    PostalCode    : String(20);
    Country       : String(100);
    Phone         : String(50);
    Fax           : String(50);
}

entity POHEADER {
    key POID       : String(10);
        PONumber   : String(20);
        Vendor     : String(100);
        OrderDate  : Date;
        Status     : String(20);
    items       : Composition of many POITEMS on items.POID = POID;
}

entity POITEMS {
    key POItemID  : String(10);
        POID      : String(10);
        Material  : String(100);
        Quantity  : Integer;
        Price     : Decimal(10,2);
        Plant     : String(50);
}

entity KNA1{
    key Kunnr : String;
    Name : String;
    Ort01 : String;
    Pstlz: String;
}