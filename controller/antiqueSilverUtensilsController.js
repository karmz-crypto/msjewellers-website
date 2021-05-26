const imageObjectModel = require('../model/imageObjectModel');

exports.getAntiqueSilverUtensils = (req,res)=>{
    res.render('dynamicTemplate',{
        pageTitle:'Antique Silver Utensils',
        pageLabel:'Antique Silver Utensils',
        imageObjectArrayInEjs:getImageObject()
    });
};

function getImageObject(){
    let imageObjectArrayForEjs = [];
    imageObjectModel.forEach(element=>{
        
            
                if(element._cover_image.isCoverImage==="true"){
                    if(element._cover_image.coverPage[0]==="antique silver utensils"){
                    imageObjectArrayForEjs.push(element);}
                }
                
           

              
    });
    return imageObjectArrayForEjs;
}



