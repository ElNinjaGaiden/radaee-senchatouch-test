Ext.define('RadaeeTest.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Welcome to Sencha Touch 2'
                    },
                    {
                        xtype: 'button',
                        text: 'Test Me',
                        handler: function () {
                            RadaeePDFPlugin.openFromAssets({
                                url: 'www/resources/docs/fdk_takeoff_minimums.pdf',
                                password: ''
                            }, function(message) {
                                console.log('Success: ' + message);
                            }, function(err) {
                                console.log('Failure: ', err);
                            });
                        }
                    }
                ]
            }
        ]
    }
});
