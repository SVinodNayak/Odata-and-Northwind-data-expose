using TASKODATA.db from '../db/schema';

service Service {
    
    entity Customers as projection on db.Customers;
    entity POHEADER as projection on db.POHEADER;
    entity POITEMS as projection on db.POITEMS;
    entity KNA1 as projection on db.KNA1;

}