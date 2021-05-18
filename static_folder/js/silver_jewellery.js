
$(document).ready(function(){
    console.log ('js is running');
    //$(window).scroll(scrollPage);
    pageStyle();

}); // end of ready function 




function pageStyle(){
    activeElement = document.querySelector('.active');
    if(activeElement.href!=='/silverJewellery'){
        $(activeElement).removeClass('active');
   element = document.querySelector('a[href=*"/silverJewellery"]');
    $(element).addClass('active');
   console.log(element); 
    }
   //.setAttribute('class','active');
}