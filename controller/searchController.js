const imageObjectModel = require('../model/imageObjectModel');


exports.getSearch = (req,res)=>{
    
    queryString = req.query.queryString;
    res.render('search',{
        pageTitle:'Search',
        pageLabel:'Search',
        queryString:queryString
    });
};

