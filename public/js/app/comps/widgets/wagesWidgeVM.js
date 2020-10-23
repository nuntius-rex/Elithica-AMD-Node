define(['knockout'], function(ko) {
    return function wagesWidgetViewModal() {
        console.log("Wages Widget VM loaded!");

        /*
        Once the module is defined, one can perform the specific
        modular programming. Here we are using jQuery, since it is defined in init.js.
        One could also code straight knockout here of course. 
        */

        $('#calculateWagesbutton').click(function(e){

            let rate=$('#rate').val();
            let hours=$('#hours').val();
            let weeks=$('#weeks').val();
            let result=(rate*hours)*weeks;
            $('#WagesResult').html( `$ ${result} a year.`  );

        });


        /*
          Widget Specific CSS
          This gets applied to the scoped <style> tag in the template.
        */
        this.wagesWidgetCSS=ko.observable(`

          #wagesWidget{
              border:solid 1px;
              padding:10px;
              width:200px;
              height:350px;
          }

          #wagesWidget label{
            width:100px;
          }

        `);



  } //End VM function
}); //End Module
