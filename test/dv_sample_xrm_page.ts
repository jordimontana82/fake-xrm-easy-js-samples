import { ContactForm } from "../src/ContactForm"
import { XrmFakedContext } from "fakexrmeasy";
import { XrmMockGenerator, XrmStaticMock } from "xrm-mock";

var WebApiClient = require('../src/new_WebApiClient.ts');
var fakeUrl: string = 'http://fakeUrl';

describe("Contact", () => {
  let context: XrmFakedContext = null;

  beforeEach(() => {
    XrmMockGenerator.initialise({});
    XrmMockGenerator.Attribute.createString("firstname", "Joe");
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

  it("should set OtherDetails tab to visible", done => {
    let otherTab = Xrm.Page.ui.tabs.get('OtherDetails');
    ContactForm.hideTabs(function() {
      expect(otherTab.getVisible()).toBe(true); 
      done();
    });
  });
});