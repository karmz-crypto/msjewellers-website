$(document).ready(function(){
    console.log ('js is running');

    pageStyle();
    
    

}); // end of ready function 

function pageStyle(){
    activeElement = document.querySelector('.active');
    if(activeElement.href!=='/silverUtensils'){
        $(activeElement).removeClass('active');
   element = document.querySelector('a[href*="/silverUtensils"]');
    $(element).addClass('active');
   console.log(element); 
    }
   //.setAttribute('class','active');
}



