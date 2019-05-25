/// <reference path ="../node_modules/@types/jquery/index.d.ts"/> 

var WebApiClient = require('../src/new_WebApiClient.ts');

export class ContactForm {

    public static onLoad(executionContext: any) {
        var formContext = executionContext.getFormContext();
        
        this.showHideTabsBasedOnCompany(formContext, function() {

        });

    }

    public static showHideTabsBasedOnCompany(formContext, callback: (success: boolean) => void) {
        var accountId = formContext.getAttribute("parentcustomerid").getValue()[0].id;

        WebApiClient.retrieveMultiple("accounts(" + accountId + ")?$select=name", function (data) {
            var results = data.value;

            if(results.length && results.length > 0) {
                var accountDetails = results[0];
                if(accountDetails) {
                    formContext.ui.tabs.get('OtherDetails').setVisible(true);
                }
                
            }
            callback(true);
        });
    }
    
}