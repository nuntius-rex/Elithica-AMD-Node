define(['knockout'], function(ko) {
    return function bodyViewModal() {
        console.log("Body VM loaded!");

        /*
          TEMPLATE VARIABLES:
          Here we can see that we retrieved an object variable from the template.
          The declarations were made serverside via the homeController.js.
          This is made possible by the templating engine assigned to Express
          inspect main.js called es6Renderer.

          The variable below is set by reading the template variables and assigning
          it on the index.html page. We set it as a global there, and then can use it
          by name in components.
        */
        console.log(templateObj);

        $('#templateObjResults').html(`
          ${templateObj.title}<br>
          ${templateObj.version}<br>
          ${templateObj.rdir}<br>
        `);


        /*
          Body Specific CSS can be applied here or in css/global.css
          This gets applied to the scoped <style> in body.
        */

        this.bodyCSS=ko.observable(`

          main{
            display:none;
            margin-left:auto;
            margin-right:auto;
            width: 97%;
            min-height:1000px;
            border:solid 1px;
            padding:10px;
          }

        `);



  } //End VM function
}); //End Module
