//==============================================
// initBaseCompModel - Main compoent loader
// Dan Guinn - 2019-01-10
// Dev note: Use the following in the names t
//"CT" = "Component Template"
//"VM" = "View Model"
//==============================================
define(['knockout'], function(ko) {
    return function initBaseCompModel(appConfig) {
        //appConfig.title="Test";
        this.appConfig=ko.observable(appConfig);

        //App components:
        this.components = [

          /*
          The structure provided here is arbitrary.
          The main takeaway should be that here one can
          define modules that are registered automatically.
          */

          //Core App Modules
          //======================================
          //System Components:
          //======================================
          {
              name: "navBar",
              model: "navBarVM",
              template: "navBarCT.html",
              path: "app/comps/navbars/",
              trigger: "",
              active: "true"
          },
          {
              name: "header",
              model: "headerVM",
              template: "headerCT.html",
              path: "app/comps/headers/",
              active: "true"
          },
          {
              name: "body",
              model: "bodyVM",
              template: "bodyCT.html",
              path: "app/comps/body/",
              active: "true"
          },
          {
              name: "footer",
              model: "footerVM",
              template: "footerCT.html",
              path: "app/comps/footers/",
              active: "true"
          },
          {
              name: "loading",
              model: "loadingVM",
              template: "loadingCT.html",
              path: "app/comps/body/",
              active: "true"
          },

          //======================================
          //App Components:
          //======================================
          {
            name:"wagesWidget",
            model: "wagesWidgeVM",
            template: "wagesWidgeCT.html",
            path: "app/comps/widgets/",
            active: "true"
          }


        ];

        //Compoent Auto-Registration:
        this.components.forEach( function(e) {
            console.log("registering "+e.name);
            if(e.active=="true"){
                ko.components.register(e.name, {
                    viewModel: { require: e.path+e.model },
                    template: { require: "text!"+e.path+e.template }
                });
            }
        });

    };
});
