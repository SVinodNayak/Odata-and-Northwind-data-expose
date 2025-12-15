sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"routing/test/integration/pages/Z301636ODATASetList",
	"routing/test/integration/pages/Z301636ODATASetObjectPage"
], function (JourneyRunner, Z301636ODATASetList, Z301636ODATASetObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('routing') + '/test/flp.html#app-preview',
        pages: {
			onTheZ301636ODATASetList: Z301636ODATASetList,
			onTheZ301636ODATASetObjectPage: Z301636ODATASetObjectPage
        },
        async: true
    });

    return runner;
});

