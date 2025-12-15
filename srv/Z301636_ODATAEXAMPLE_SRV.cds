using Z301636_ODATAEXAMPLE_SRV from './external/Z301636_ODATAEXAMPLE_SRV.cds';

service Z301636_ODATAEXAMPLE_SRVSampleService {
    @readonly
    entity Z301636ODATASet as projection on Z301636_ODATAEXAMPLE_SRV.Z301636ODATASet
    {        key Mandt, key Kunnr, Name, Ort01, Pstlz     }    
;
}