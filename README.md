# Elithica NodeJS

<p style="color:red">NOTE: THIS REPO IS RETAINED FOR HISTORCAL REASONS AS PRE-WORK HISTORY OF THE OFFICIAL ELITHICA.<br>
TO DOWNLOAD CURRENT VERSIONS GET OUR <a href="https://www.npmjs.com/package/@elithica/cli" target="_blank">ELITHICA CLI</a>.</p>

<p>Elithica and NodeJS Full Stack:</p>

<p>Elithica is a minimalistic front-end module system designed to allow for quick modular development in common languages.</p>

<p>When combined with NodeJS and Express, a full stack solution is possible. If you would like just the front-end code alone, for usage in other platforms, you can find it <a href="https://github.com/nuntius-rex/elithica-amd"  target="_blank">here</a>. </p>

## Explanation

<p>The Elithica module system is designed with quick, simple modularity in mind. It is useful in such cases where modularity is the main concern. Elithica can also be helpful for students and designers. Many may have ample experience in HTML, CSS, Bootstrap and jQuery, but may not have excessive programming experience, and yet want to use a SPA (Single Page Application) structure. These will find more in common with their current skill set. With Elithica, you can do as much or as little as you want! Use the module setup for modular jQuery components or use the more advanced KnockoutJS structure to make reactive components. Two modules have been included to demonstrate both concepts.</p>

## Technology

<p>Elithica was originally inspired by the documentation on knockoutjs.com regarding AMD loading with RequireJS, located <a href="https://knockoutjs.com/documentation/amd-loading.html" target="_blank">here</a>. One popular framework that utilizes the same sort of approach described in the Knockout documentation is the much larger and more robust, enterprise-ready <a href="https://www.oracle.com/webfolder/technetwork/jet/index-alta.html" target="_blank">Oracle Jet</a>. While Elithica shares the same sort of modular approach, the comparison has to end there, as Elithica is not robust, and it is not feature rich. It is arguably not really even a framework. It is just designed to do a simple job ("be modular"), with the philosophy of "add only what is needed, not everything that you might need." Perhaps it will serve your needs well!    
</p>

<p>The NodeJS MVC structure was built using a Node tool I created called MVC Create available in the following locations:</p>
<a href="https://github.com/nuntius-rex/node-mvc-create">https://github.com/nuntius-rex/node-mvc-create</a><br>
<a href="https://www.npmjs.com/package/mvccreate">https://www.npmjs.com/package/mvccreate</a>
</p>

<p>
![Preview](/public/img/preview.png?raw=true "Preview")
</p>


## Install

Clone this repo and run NPM install to install the Node modules:

```
git clone https://github.com/nuntius-rex/elithica-amd
npm install
```
### Running

Run NPM start and then open the following location with your browser:

```
npm start
http://localhost:3000
```
<p>You will find that the system uses common conventions which can be helpful when learning.</p>

<p>Elithica uses the following core libraries:
  <ul>
    <li><a href="https://knockoutjs.com/">Knockout JS</a></li>
    <li><a href="https://jquery.com/">jQuery</a></li>
    <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
  </ul>
</p>

<p>The NodeJS core libraries that will be installed are are:
  <ul>
    <li><a href="https://www.npmjs.com/package/express">Express</a></li>
    <li><a href="https://www.npmjs.com/package/express-es6-template-engine">Express ES6 string template engine</a></li>
    <li><a href="https://www.npmjs.com/package/mvccreate">mvccreate</a> (also by me, optional dev dependency I used to make the default structure)</li>
    <li><a href="https://www.npmjs.com/package/nodemon">nodemon</a> (optional dev dependency I use during development, you may need to install globally for it to work on Linux. If you wish to use it for npm start, change your package.json script start reference to 'nodemon main.js')</li>
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
  In our example, the component is identified to the system in initBaseCompModel.js located in js/app/sys/config. Here, we just provide an object to the system as follows:
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
  The headerCT.html is for your HTML code. The templating features use KnockoutJS conventions. So to include your code, in the page, you use the data-bind methodology.
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

    ${templateObj.title};
    ${templateObj.version};
    ${templateObj.rdir};

```

<p>
  Each new variable you feed to the template on the server side can also be variablized for the front end to use in modules as well. In general, you would probably want to just capture the entire object variable, but you can parse it out for your needs. Note the usage of single quotes rather than template literals. See an object example in index.html.
</p>

```

    var template_title='{template_vars.title}';

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


#### Service Security

<p>If your are planning to do more secure transactional types of interactions with the server, such as logins, etc. I recommend setting up JWT on the server-side. I may add an example of this in the future.</p>
