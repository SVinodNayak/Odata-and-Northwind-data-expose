sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'routing',
            componentId: 'Z301636ODATASetObjectPage',
            contextPath: '/Z301636ODATASet'
        },
        CustomPageDefinitions
    );
});