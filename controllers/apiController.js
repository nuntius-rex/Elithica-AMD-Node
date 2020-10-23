const router = require('../router');
const apiModel = require('../models/apiModel');

exports.processReq=(req,res)=>{
  res.json({app:apiModel.appConfig})
  //res.render("app");
};
