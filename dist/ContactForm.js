"use strict";
/// <reference path ="../node_modules/@types/jquery/index.d.ts"/> 
Object.defineProperty(exports, "__esModule", { value: true });
var WebApiClient = require('../src/new_WebApiClient.ts');
var ContactForm = /** @class */ (function () {
    function ContactForm() {
    }
    ContactForm.onLoad = function (executionContext) {
        var formContext = executionContext.getFormContext();
        this.showHideTabsBasedOnCompany(formContext, function () {
        });
    };
    ContactForm.showHideTabsBasedOnCompany = function (formContext, callback) {
        var accountId = formContext.getAttribute("parentcustomerid").getValue()[0].id;
        var cleanAccountId = accountId.replace("{", "").replace("}", "");
        WebApiClient.retrieveMultiple("accounts(" + cleanAccountId + ")?$select=dv_isbigcompany", function (data) {
            var accountDetails = data;
            if (accountDetails.dv_isbigcompany) {
                formContext.ui.tabs.get('tab_bigcompany').setVisible(true);
            }
            else {
                formContext.ui.tabs.get('tab_smallcompany').setVisible(true);
            }
            callback(true);
        });
    };
    return ContactForm;
}());
exports.ContactForm = ContactForm;
//# sourceMappingURL=ContactForm.js.map