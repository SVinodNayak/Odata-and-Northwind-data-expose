const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const Z301636_ODATAEXAMPLE_SRV = await cds.connect.to("Z301636_ODATAEXAMPLE_SRV"); 
      srv.on('READ', 'Z301636ODATASet', req => Z301636_ODATAEXAMPLE_SRV.run(req.query)); 
}