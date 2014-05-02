Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
    
    items : [ 
        { 
            xtype: 'rallybutton', 
            text: 'Click me', 
            handler: function() { 
                Ext.Msg.alert('Button', 'You clicked me'); 
            } 
        } 
    ],
    
    launch: function() {
        //Write app code here
    }
});
