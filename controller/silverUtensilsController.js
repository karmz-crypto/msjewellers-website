const imageObjectModelJson = require('../model/imageObjectModel');
    
exports.getSilverUtensils = (req,res)=>{
    //var imageObjectModelJsonFiltered = getdata();
   // console.log(getdata()[0].imageTitle);
    res.render('silver_utensils',{pageTitle:'MSJ Silver Utensils',
                                    pageLabel:'silver utensils',
                                imageObjectEjs_antiqueDinnerSet:getdata()});
    
};

function getdata() { 
    var object = [];
    imageObjectModelJson.filter(model_obj=>{
       // console.log(model_obj._cover_image.isCoverImage);
    if(model_obj._cover_image.isCoverImage==='true'){
       // console.log(model_obj._cover_image.coverPage);
       for(var i=0;i<model_obj._cover_image.coverPage.length;i++){
        if(model_obj._cover_image.coverPage[i]==='silver utensils page'){
          //  console.log('both the conditions are true');
          //  console.log(model_obj.imageTitle);
           //return model_obj;
           object.push(model_obj);
           // console.log(model_obj.category.length);//remove this code of line
        }
        }
    }
    
}); return object;}  