// This requirejs module component
define(['knockout'], function(ko) {
    return function navBarViewModel() {
        console.log("Main NavBar loaded!");
        this.title=ko.observable(appConfig.app.title+' - '+appConfig.app.version);
        this.rdir=ko.observable("/"+appConfig.app.rdir+"/");
        this.home=ko.observable("/");


    };
});
