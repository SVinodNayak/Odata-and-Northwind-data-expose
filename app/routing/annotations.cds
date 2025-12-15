using Z301636_ODATAEXAMPLE_SRVSampleService as service from '../../srv/Z301636_ODATAEXAMPLE_SRV';
annotate service.Z301636ODATASet with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Mandt',
                Value : Mandt,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Kunnr',
                Value : Kunnr,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Name',
                Value : Name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Ort01',
                Value : Ort01,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Pstlz',
                Value : Pstlz,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Kunnr',
            Value : Kunnr,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Mandt',
            Value : Mandt,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Name',
            Value : Name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Ort01',
            Value : Ort01,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Pstlz',
            Value : Pstlz,
        },
    ],
);

