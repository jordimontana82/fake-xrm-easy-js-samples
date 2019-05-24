"use strict";
/// <reference path ="../node_modules/@types/jquery/index.d.ts"/> 
Object.defineProperty(exports, "__esModule", { value: true });
//var WebApiClient = require('../src/new_WebApiClient.ts');
var ContactForm = /** @class */ (function () {
    function ContactForm() {
    }
    ContactForm.hasSomeProperty = function (callback) {
        /*
        WebApiClient.retrieveMultiple("contacts?$select=name,revenue", function (data) {
            var results = data.value;

            callback(results.length > 0);

        });

        */
        alert('hasSomeProperty');
        callback(true);
    };
    ContactForm.hideTabs = function (callback) {
        var contactid = Xrm.Page.data.entity.getId();
        ContactForm.hasSomeProperty(function (result) {
            Xrm.Page.ui.tabs.get('OtherDetails').setVisible(result);
            callback();
        });
    };
    return ContactForm;
}());
exports.ContactForm = ContactForm;
//# sourceMappingURL=ContactForm.js.map