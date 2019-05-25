/// <reference path ="../node_modules/@types/jquery/index.d.ts"/> 

//var WebApiClient = require('../src/new_WebApiClient.ts');

export class ContactForm {

    public static onLoad(executionContext: any) {
        var accountId = executionContext.getFormContext().getAttribute("parentcustomerid").getValue()[0].id;

        
    }
    public static hasSomeProperty(callback: (result: boolean) => void) {
        /*
        WebApiClient.retrieveMultiple("contacts?$select=name,revenue", function (data) {
            var results = data.value;

            callback(results.length > 0);

        });

        */

       alert('hasSomeProperty');
       callback(true);
    }
    public static hideTabs(callback: () => void) {
        var contactid = Xrm.Page.data.entity.getId();

        ContactForm.hasSomeProperty(function (result) {
            Xrm.Page.ui.tabs.get('OtherDetails').setVisible(result);
            callback();
        });
    }
    
}