sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'routing',
            componentId: 'Z301636ODATASetList',
            contextPath: '/Z301636ODATASet'
        },
        CustomPageDefinitions
    );
});