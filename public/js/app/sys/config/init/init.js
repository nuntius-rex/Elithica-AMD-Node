//==============================================
// init.js
// Dan Guinn - 2019-01-10
//==============================================

  //appConfig will be populated by the server request on load:
  appConfig={};
  /*
  appConfig={
    app:{
      title:"ELITHICA",
      version: "v1.0",
      rdir: "elithica"
    }
  }
*/

  requirejs.config({
      baseUrl: 'js/lib',
      shim : {
        "bootstrap" : { "deps" :['jquery'] },
      },
      paths: {
          config: '../js/app/sys/config',
          app: '../app',
          sys: '../app/sys',
          comps: '../app/comps',
          jquery: 'jquery.min',
          bootstrap: 'bootstrap.min'
      },
  });

  try{
    var path = window.location.pathname;
    var url = window.location.search;
    param = url.replace("?", '');
  }catch(e){
    console.log(e);
  }

  //if(path.toLowerCase()=="/"+appConfig.rdir+"/"){

    require([
      'knockout',
      'sys/config/initBaseCompModel',
      'domReady!',
      'jquery',
      'bootstrap',
      'fontawesome',
      '../global'
    ],function(ko, initBaseCompModel) {
          window.ko = ko;

          /*HERE A CALL COULD BE MADE TO A BACKEND FOR APP CONFIGURATION SETTINGS:*/
          window.ko = ko;
          window.jquery = window.$ = $;

          $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //url: baseUrl+'/api/'+initAPI,
            url: "http://localhost:3000/api",
            type: 'POST',
            //data: JSON.stringify(reqObj),
            //data: JSON.stringify(token),
            success: function (config) {
                console.log(config);
                if(config != null){
                    appConfig=config;
                    $('title').html(appConfig.app.title);
                    sessionStorage.setItem('appConfig', JSON.stringify(appConfig) );
                    ko.applyBindings( new initBaseCompModel(appConfig));
                }else{
                  console.log("config failed");
                }
            }
          });

          //ko.applyBindings( new initBaseCompModel());

    });//End require
  //}//End dash
