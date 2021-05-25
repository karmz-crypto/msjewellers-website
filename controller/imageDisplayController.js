const imageObjectModel = require('../model/imageObjectModel');

exports.getImageDisplay = (req,res)=>{

    let imageId = req.params.id;
    let isImagePresence = checkImagePresence(imageId);
    if(isImagePresence){
    renderMethod(req,res);
    }
    else{renderError(res);}
    
};

function renderError(res){
    res.render('errorImageNotPresent',{pageTitle:'Error',pageLabel:'Error'});
}

function renderMethod(req,res){
    const displayObject = returnObjectMethod(req.params.id);
    res.render('imageDisplay',{
        pageTitle:'image page',
        pageLabel:"Image Page",
        specificImageDisplay : displayObject.displayImageObject,//this is an object
        similarImageDisplay : displayObject.similarImageObject, // this is an array of object
        relatedImageDisplay: displayObject.relatedImageObject // this is an array of object
        
    });
}

function returnObjectMethod(id){
    var obj={similarImageObject:[],
            relatedImageObject:[],           
        };
    imageObjectModel.forEach(data=>{ 
        if(data.imageId===id){
            //console.log('in if');
            obj.displayImageObject = data;    
        }
    });
    
    //var primaryCategory = obj.displayImageObject.primaryCategory;
    imageObjectModel.forEach(data=>{
        if(data.primaryCategory===obj.displayImageObject.primaryCategory){
          
           obj.similarImageObject.push(data);
        }
    }); 
    
    
    // closing foreach function 

    imageObjectModel.forEach(data=>{
        if(obj.displayImageObject.secondaryCategory===data.primaryCategory)
        obj.relatedImageObject.push(data);
    });
    //console.log(`the length of array ${obj.relatedImageObject.length}`);

       
        return obj;
}


function checkImagePresence(id){
    imageObjectModel.forEach(data=>{
        if(id===data.imageId){
            return 
        }
    }); return true;
}

