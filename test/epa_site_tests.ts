import * as Site from "../src/epa_site"

import { XrmMockGenerator } from "xrm-mock";

describe("Site", () => {
  beforeEach(() => {
    XrmMockGenerator.initialise({});
    XrmMockGenerator.Attribute.createString("firstname", "Joe");
    XrmMockGenerator.Tab.createTab("PCB", "PCB", false);
    XrmMockGenerator.Tab.createTab("tab_6", "Tab 6", false);
  });

  it("should initially be called Joe", () => {
    let name = Xrm.Page.getAttribute("firstname").getValue();
    expect(name).toBe("Joe"); // Pass
  });

  it("should set PCB and tab_6 tabs to visible", () => {
    Site.default.hideTabs();
    let tabPCB = Xrm.Page.ui.tabs.get('PCB');
    let tab6 = Xrm.Page.ui.tabs.get('tab_6');
    expect(tabPCB.getVisible()).toBe(true); 
    expect(tab6.getVisible()).toBe(true); 
  });
});