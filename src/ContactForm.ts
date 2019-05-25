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

        var cleanAccountId = accountId.replace("{", "").replace("}", "");

        WebApiClient.retrieveMultiple("accounts(" + cleanAccountId + ")?$select=dv_isbigcompany", function (data) {
            var results = data.value;

            if(results.length && results.length > 0) {
                var accountDetails = results[0];
                if(accountDetails.dv_isbigcompany) {
                    formContext.ui.tabs.get('tab_bigcompany').setVisible(true);
                }
                else {
                    formContext.ui.tabs.get('tab_smallcompany').setVisible(true);
                }
                
            }
            callback(true);
        });
    }
    
}