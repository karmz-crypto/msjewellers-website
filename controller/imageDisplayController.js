const imageObjectModel = require('../model/imageObjectModel');
exports.getImageDisplay = (req,res)=>{
    const displayObject = returnObjectMethod(req.params.id);
    res.render('imageDisplay',{
        pageTitle:'image page',
        pageLabel:"Image Page",
        specificImageDisplay : displayObject.displayImageObject,//this is an object
        similarImageDisplay : displayObject.similarImageObject, // this is an array of object
        relatedImageDisplay: displayObject.relatedImageObject
        
    });
};

function returnObjectMethod(id){
    var obj={similarImageObject:[],
            relatedImageObject:[],
            
        };
    imageObjectModel.forEach(data=>{ 
        if(data.imageId===id){
            console.log('in if');
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
        for(var i=0;i<obj.displayImageObject.category.length;i++){
            for(var j=0;j<data.category.length;j++){
                if(obj.displayImageObject.category[i]===data.category[j]){
                    obj.relatedImageObject.push(data);
                }
            }
        }
    });
    console.log(`the length of array ${obj.relatedImageObject.length}`);

        for(var i=0;i<obj.relatedImageObject.length;i++){
            for(var k=1;k<obj.relatedImageObject.length;k++){
                if(obj.relatedImageObject[i].imageId===obj.relatedImageObject[k].imageId){
                    obj.relatedImageObject.splice(k,1);
                }
            }
        } 
         console.log(`the new length of array ${obj.relatedImageObject.length}`); 
         var tempArray =[];
         for(var i=0;i<obj.relatedImageObject.length;i++){
            
             if(obj.displayImageObject.primaryCategory!==obj.relatedImageObject[i].primaryCategory){
                 
                 tempArray.push(obj.relatedImageObject[i]);
             }console.log(`temp array length is ${tempArray.length}`);
         }
         obj.relatedImageObject=tempArray;
         console.log(`related object length is ${obj.relatedImageObject.length}`);
        return obj;
}

