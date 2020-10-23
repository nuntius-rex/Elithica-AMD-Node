const appName="Elithica (NodeJS Version)"
const port=3000;
const express=require("express");
const path = require('path');
const serveStatic = require('serve-static');
const app=express();
const es6Renderer = require('express-es6-template-engine');

const router = require('./router');
const routes=router.routes;

//Serve public files"
//app.use(express.static(__dirname + '/public'));
app.use(serveStatic(path.join(__dirname, 'public')))

//OPTIONAL: Setup templating (allows you to send parameters on load to Elithica):
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

//Dynamically setup get() routes to all controllers:
for(let i=0;i<routes.length;i++){

  console.log(routes[i]);

  let controller=routes[i].controller; //This returns a controller function
  if(routes[i].type=="get"){
    app.get(routes[i].path,controller()); //This executes the controller function for the given path
  }else if(routes[i].type=="post"){
    app.post(routes[i].path,controller()); //This executes the controller function for the given path
  }
}

//Global Start:
app.listen(port, ()=> {
  console.log(
`The ${appName} has started at http://localhost:${port}`);
});
