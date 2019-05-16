/// <reference path ="../node_modules/@types/jquery/index.d.ts"/> 

export default class Site {
    public static getSiteTypeName(typeid) {
        var urlPos = Xrm.Page.context.getClientUrl() + "/XRMServices/2011/OrganizationData.svc/pnp_sitetypeSet?$select=pnp_SiteType&$filter=pnp_sitetypeId eq guid'" + typeid + "'";
        var type;
    
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            url: urlPos,
            beforeSend: function (XMLHttpRequest) {
                //Specifying this header ensures that the results will be returned as JSON.
                XMLHttpRequest.setRequestHeader("Accept", "application/json");
            },
            success: function (data, textStatus, XmlHttpRequest) {
                if (data.d.results.length > 0) {
                    type = data.d.results[0].pnp_SiteType;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) { alert("Error"); }
        });
    
        return type;
    }

    public static getSiteTypes(siteid) {
        var urlPos = Xrm.Page.context.getClientUrl() + "/XRMServices/2011/OrganizationData.svc/epa_site_pnp_sitetypeSet?$select=pnp_sitetypeid&$filter=epa_siteid eq guid'" + siteid + "'";
        var types;
    
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            url: urlPos,
            beforeSend: function (XMLHttpRequest) {
                //Specifying this header ensures that the results will be returned as JSON.
                XMLHttpRequest.setRequestHeader("Accept", "application/json");
            },
            success: function (data, textStatus, XmlHttpRequest) {
                if (data.d.results.length > 0) {
                    types = data.d.results;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) { alert("Error"); }
        });
    
        return types;
    }

    public static hideTabs() {
        var siteid = Xrm.Page.data.entity.getId();
        //JM fix when the Site is created for the first time, there is no Guid yet (new form)
        if (siteid == null || siteid == "")
            return;
        var sitetypes = Site.getSiteTypes(siteid.replace('{', '').replace('}',''));
    
        if (sitetypes != null) {
    
            if (sitetypes.length == 1) {
                var typeid = sitetypes[0].pnp_sitetypeid.replace('{', '').replace('}', '');
                var type = Site.getSiteTypeName(typeid);
    
                if (type === "Landfill") {
                    Xrm.Page.ui.tabs.get('PCB').setVisible(false);
                    Xrm.Page.ui.tabs.get('tab_4').setVisible(false);   //'Treatment Plant' tab
                    Xrm.Page.ui.tabs.get('tab_6').setVisible(true);    //'Landfill' tab
                }
                else {
                    Xrm.Page.ui.tabs.get('PCB').setVisible(true);
                    Xrm.Page.ui.tabs.get('tab_4').setVisible(true);    //'Treatment Plant' tab
                    Xrm.Page.ui.tabs.get('tab_6').setVisible(false);   //'Landfill' tab
                }
            }
            else {
    
                Xrm.Page.ui.tabs.get('tab_6').setVisible(false);
    
                for (var i = 0; i < sitetypes.length; i++) {
                    var typeid = sitetypes[i].pnp_sitetypeid.replace('{', '').replace('}', '');
                    var type = Site.getSiteTypeName(typeid);
    
                    if (type === "Landfill") {
                        Xrm.Page.ui.tabs.get('tab_6').setVisible(true);
                    }
                }
            }
        }
        else {
            Xrm.Page.ui.tabs.get('PCB').setVisible(true);
            Xrm.Page.ui.tabs.get('tab_6').setVisible(true);
        }
    }
    
    
    
    
    
}