
const router = require('../router');
const homeModel = require('../models/homeModel');

exports.processReq=(req,res)=>{
  let page=req.path;
  let params=req.query;

  let routeObj=router.getCurRouteObj("Home");
  let template=routeObj.template;

  let appConfig=homeModel.appConfig;
  console.log(appConfig);


  res.render(template, {locals:
    template_vars={
      title: appConfig.title,
      version: appConfig.version,
      rdir: appConfig.rdir,
    }
  });
};
