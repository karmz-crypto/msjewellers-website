const imageObjectModel = require('../model/imageObjectModel');

exports.getSearch=(req,res)=>{
    searchUrl = req.params.id;
    res.render('dynamicSearch',{
        pageTitle:'Search',
        pageLabel:'Search',
        imageObjectInEjs:getImageUrl(searchUrl)
    });

};

function getImageUrl(searchUrl){
   let imageObjectArray = [];
    imageObjectModel.forEach(element=>{
        for(var i=0;i<element.urlSearchTag.length;i++){
            if(element.urlSearchTag[i]===searchUrl){
                imageObjectArray.push(element);
            }
        }
        
    });
    return imageObjectArray;
}