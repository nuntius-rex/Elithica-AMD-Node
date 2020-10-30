# Elithica Front-End Module System (AMD)
A minimalistic front-end module system designed to allow for quick modular development in common languages.

## Explanation

<p>The Elithica module system is designed with quick, simple modularity in mind. It is useful in such cases where a larger library/framework is not needed and would probably be more trouble than desired. Elithica can also be helpful for students. Likewise designers, who may have ample experience in HTML, CSS, Bootstrap and jQuery, but not have excessive programming experience, who want to use a SPA (Single Page Application) structure, will find more in common with their current skill set. With Elithica, you can do as much or as little as you want! Your modules can be in jQuery, plain JavaScript or Knockout.</p>

## Technology

<p>Elithica was originally inspired by the documentation on knockoutjs.com regarding AMD loading with RequireJS, located <a href="https://knockoutjs.com/documentation/amd-loading.html" target="_blank">here</a>. One popular framework that utilizes the same sort of approach described in the Knockout documentation is the much larger and more robust, enterprise-ready <a href="https://www.oracle.com/webfolder/technetwork/jet/index-alta.html" target="_blank">Oracle Jet</a>. While Elithica shares the same sort of modular approach, the comparison has to end there, as Elithica is not robust, and it is not feature rich. It is not really even a framework. It is just designed to do a simple job ("be modular"), with the philosophy of "add only what is needed, not everything that you might need." Perhaps it will serve your needs well!    
</p>


<p>The NodeJS MVC structure was built using a Node tool I created called MVC Create available in the following locations:

https://github.com/nuntius-rex/node-mvc-create <br>
https://www.npmjs.com/package/mvccreate <br>

</p>

![Preview](/img/preview.png?raw=true "Preview")

## Install

Clone this repo and run NPM install:

```
git clone https://github.com/nuntius-rex/elithica-amd
npm install
```

### Running

Open the location on your server. For example:

```
npm start
http://localhost:3000
```
<p>You will find that the system uses common conventions which can be helpful when learning.</p>

<p>Elithica uses the following core libraries:
  <ul>
    <li>Knockout JS</li>
    <li>jQuery</li>
    <li>Bootstrap</li>
  </ul>
</p>

<p>The NodeJS core libraries that will be installed are are:
  <ul>
    <li><a href="https://www.npmjs.com/package/express">Express</a></li>
    <li><a href="https://www.npmjs.com/package/express-es6-template-engine">Express ES6 string template engine</a></li>
    <li><a href="https://www.npmjs.com/package/mvccreate">mvccreate</a> (also by me, optional dev dependency I used to make the default structure)</li>
    <li><a href="https://www.npmjs.com/package/nodemon">nodemon</a> (optional dev dependency I use during development)</li>
    <li>Note: To remove either of the dev dependencies, edit package.json</li>
  </ul>
</p>


### Modules

<p>The Elithica mode of building web structures involves a simple modular approach.</p>

<p>The SPA application is built in components made of two files. First, an html template file, and second, a JavaScript view model.</p>


<p>The Header you see in the preview above in red is built as follows.</p>

<p>Here are example names:
  <ul>
    <li>headerCT.html</li>
    <li>headerVM.js</li>
  </ul>
</p>

<p>
  The headerCT.html code looks as follows:
</p>

```
<header>
  <h1>Elithica (NodeJS version)</h1>
</header>
```

<p>
  The headerVM.js code looks as follows. The module pattern here is AMD (Asynchronous Module Definition):
</p>


```
  define(['knockout'], function(ko) {
      return function headerViewModal() {
          console.log("Header VM loaded!");

          //Your custom goes code here.

    } //End VM function
  }); //End Module

```

<p>
  In our example, the component is identified to the system in initBaseCompModel.js located at .
  Here, we just provide an object to the system as follows:
</p>

```
  {
      name: "header",
      model: "headerVM",
      template: "headerCT.html",
      path: "app/comps/headers/",
      active: "true"
  }

  ```

<p>
  Once the module is defined, it is now ready to use.
  The headerCT.html is for your HTML code. The templating features use KnockoutJS conventions. So to include your code,
  in the page, you use the data-bind methodology.
</p>

```
    <div data-bind="component: { name: 'header' }"></div>
```

## NodeJS Notes:

<p>Running Elithica in NodeJS presents some interesting possibilities and options.</p>

### File Locations:

<p>One can run the Elithica structure all directly from a predefined "public" folder or move the index.html to a "views" folder to invoke templating. So really the option becomes, do I want to run a service-based application? Then run purely from public. Do I want SPA server-side templating or both? Run from view.</p>

### Server-Side Templating:

<p>How does server-side templating work? Templating is a technique of doing inline value replacement into a predefined structure.
  With Elithica, this is our base index.html file. The template variable declarations are made serverside via the homeController
  in our case, homeController.js. This is made possible by the templating engine assigned to Express in main.js called es6Renderer (Express ES6 string template engine).
</p>

<p>For running with templating, the next question one will need to contemplate is, "Do I want to share the template variables with the front-end JavaScript?" If so, there is a unique technique for that. Templating features can be injected into the template (index.html):
</p>
```
    $&#123;templateObj.title&#125;<br>
    $&#123;templateObj.version&#125;<br>
    $&#123;templateObj.rdir&#125;<br>
```
<p>
  Result:<br>
  <!-- The above syntax like ${templateObj.title} will only work directly in index.html.
  Inside of modules, populate from the view model, in this case bodyVM.js: -->
  <div id="templateObjResults">
    <!-- populated from bodyVM.js -->
  </div>
</p>

<p>
  Each new variable you feed to the template on the server side can also be variablized for the front end to use.
  Note the usage of single quotes rather than template literals. See an object example in index.html.
</p>
```
    var template_title='$&#123;template_vars.title&#125;';
```

### Services:

<p>
  One will note, that in the js/app/comps/config/init.js file, the system makes an AJAX call on load. This can be made optional, see the (<a href="https://github.com/nuntius-rex/elithica-amd.git">structure only version</a>) to see how I've done this. Note that the appConfig object is needed, so be careful if you decided to disable, so that you have appConfig populated (see the top of the init file for the simple default).
</p>
<p>
  Neverthless, the call has been added to show that you can also get configurations or date by calling the server and asking for them. Thus, you can make enhancements to the api as needed. Calls to the API doesn't have to be just on loading, you can make service calls from within your modules, or make a library to use for regular calls.
</p>
<p>
  What is significant when using both templating and services is that you have a base load of data that can be sent and then one can send data back and forth to the server as well. One use case where this may be of significance is if one chooses to use JWT encryption. A serverside key could be generated with a time stamp and then encrypted and send forward where it is assigned to a session variable. Thereafter, it could then be utilized for transactional authentication.
</p>
