define(['knockout'], function(ko) {
    return function wagesWidgetKOViewModal() {
        console.log("Wages Widget KO VM loaded!");

        /*
        Once the module is defined, one can perform the specific
        modular programming. Here we are using Knockout as opposed to jQuery.
        Knockout, like other libraries is capable of "reactive programming"
        wherein elements are bound and then update upon change
        */


        this.wagesRate=ko.observable(40);
        this.wagesHours=ko.observable(40);
        this.wagesWeeks=ko.observable(52);
        this.wagesResult=ko.observable('');

        this.calculateWages=function(){
          let rate = this.wagesRate();
          let hours= this.wagesHours();
          let weeks= this.wagesWeeks();
          let result=(rate*hours)*weeks;
          this.wagesResult(`$ ${result} a year.`);
        }

        /*
          Widget Specific CSS
          This gets applied to the scoped <style> tag in the template.
        */
        this.wagesWidgetCSS=ko.observable(`

          #wagesWidget{
              border:solid 1px;
              padding:10px;
              width:200px;
              height:380px;
          }

          #wagesWidget label{
            width:100px;
          }

        `);



  } //End VM function
}); //End Module
