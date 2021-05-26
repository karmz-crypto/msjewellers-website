
window.onload=function(){
    console.log('js is runing in fetchapi');
};
    
async function getImage (event){  
   
    
    fetch('./imageObjectModel')
     .then(
         function(response){
             if(response.status!==200){
                 console.log(`looks like there was a problem Status Code:${response.status}`);
                 return;
             }
            response.json().then(function(data){ //this data is in array format 
               //console.log(data);               
               data.forEach(obj=>{// console.log(obj); this is in object format     
                var elementId = event.target.id;
                var element = document.getElementById(elementId);
                var fetchData = element.dataset.fetchString;
                if(fetchData===obj._fetchTag){ //filtering data 
                    var imageElement = document.createElement('img');
                    imageElement.setAttribute('src',obj.imageSrc);
                    imageElement.classList.add("img-fluid","mx-2", "p-2", "border-end", "border-bottom","isImageElementPresent");
                    imageElement.style.width="200px";
                    imageElement.style.height="200px";
                    var linkElement = document.createElement('a'); //create 'a' element
                    linkElementUrl = '/image/'+obj.imageId;
                    linkElement.setAttribute('href',linkElementUrl);
                    linkElement.appendChild(imageElement);
                    var divContainer = document.createElement('div');
                    divContainer.classList.add("container","mx-1","my-1","p-1","d-inline");
                    divContainer.appendChild(linkElement); 
                    var imageContainer = document.getElementsByClassName(obj._fetchTag);//getElementsByClassName returns array
                    //console.log(imageContainer);
                    imageContainer[0].appendChild(divContainer);// since the imagecontainer contains only one element we know it
                    // therefore imageContainer[0] is used to access the only element present in it.
                    var fetchElement = document.getElementById(obj._fetchTag);
                    //console.log(fetchElement);
                    fetchElement.classList.remove('d-none');    
                } //closing of if 
                else{return;}            
            });//closing of forEach function 
        });//closing the res.json().then() function 
            
         
         }) //closing of fetch().then() function
         .catch(function(err){ 
             console.log(`fetch error ${err}`);
         });   

        event.target.classList.add("disabled");
 }//closing of function getImage()

 