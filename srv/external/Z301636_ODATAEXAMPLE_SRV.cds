/* checksum : 5f931a7104af3f05199c4fca7872ebe4 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.supported.formats : 'atom json xlsx'
service Z301636_ODATAEXAMPLE_SRV {
  @cds.external : true
  @cds.persistence.skip : true
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.deletable : 'false'
  @sap.pageable : 'false'
  @sap.content.version : '1'
  entity Z301636ODATASet {
    @sap.unicode : 'false'
    @sap.label : 'Client'
    @sap.creatable : 'false'
    @sap.updatable : 'false'
    @sap.sortable : 'false'
    @sap.filterable : 'false'
    key Mandt : String(3) not null;
    @sap.unicode : 'false'
    @sap.label : 'Customer'
    @sap.creatable : 'false'
    @sap.updatable : 'false'
    @sap.sortable : 'false'
    @sap.filterable : 'false'
    key Kunnr : String(10) not null;
    @sap.unicode : 'false'
    @sap.label : 'Name'
    @sap.creatable : 'false'
    @sap.updatable : 'false'
    @sap.sortable : 'false'
    @sap.filterable : 'false'
    Name : String(35) not null;
    @sap.unicode : 'false'
    @sap.label : 'City'
    @sap.creatable : 'false'
    @sap.updatable : 'false'
    @sap.sortable : 'false'
    @sap.filterable : 'false'
    Ort01 : String(35) not null;
    @sap.unicode : 'false'
    @sap.label : 'Postal Code'
    @sap.creatable : 'false'
    @sap.updatable : 'false'
    @sap.sortable : 'false'
    @sap.filterable : 'false'
    Pstlz : String(10) not null;
  };
};

