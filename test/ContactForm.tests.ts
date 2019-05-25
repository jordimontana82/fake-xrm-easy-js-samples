import { ContactForm } from "../src/ContactForm"
import { XrmFakedContext, Entity } from "fakexrmeasy";
import { XrmMockGenerator, XrmStaticMock, LookupAttributeMock, LookupValueMock } from "xrm-mock";

var WebApiClient = require('../src/new_WebApiClient.ts');
var fakeUrl: string = 'http://fakeUrl';
var Guid = require('guid');

describe("Contact", () => {
  let context: XrmFakedContext = null;
  let accountId = Guid.create();

  beforeEach(() => {
    XrmMockGenerator.initialise({});
    XrmMockGenerator.Attribute.createString("firstname", "Joe");
    XrmMockGenerator.Attribute.createLookup("parentcustomerid", new LookupValueMock(accountId.toString(), "account"))
    XrmMockGenerator.Tab.createTab("Details", "Contact Details", true);
    XrmMockGenerator.Tab.createTab("OtherDetails", "Other Details", false);
    
    Xrm.Page.context.getClientUrl = function() {
        return fakeUrl;
    };
    context = new XrmFakedContext("v9.0",fakeUrl, true);
  });

  it("should initially be called Joe", () => {
    let name = Xrm.Page.getAttribute("firstname").getValue();
    expect(name).toBe("Joe"); // Pass
  });

  it("should set tab visible based on company type", done => {
    context.initialize([
      new Entity("account", accountId, {name: 'Dynamics Value SL'}),
    ]);

    var formContext = XrmMockGenerator.getFormContext();
    let otherTab = formContext.ui.tabs.get('OtherDetails');

    ContactForm.showHideTabsBasedOnCompany(formContext, function(success) {
      expect(otherTab.getVisible()).toBe(true); 
      done();
    });
  });
});