$(document).ready(function(){
    console.log ('js is running');
    $(window).scroll(scrollPage);

}); // end of ready function 


/* this function takes the image from the silver utensil page on click to modal where the img src is copid 
to the modal img section along with the image title both aruments are passesd on the click of the button to magnify 
below each image on the silver utensil page */
/*
function offCanvas(imgSrc,title){
    console.log(imgSrc);
    $('#modalImg').attr('src',imgSrc);
    $('#exampleModalLabel').text(title);
   
}  */
/*
//this is a wrking function for sub-navigation
function scrollPage(){
   
    if($(window).scrollTop())
    {
        $('#navLabel').removeClass('d-none');
    }else
     {$('#navLabel').addClass('d-none');}
}
*/
/*
function toggleButtonControl(event){
    element = event.target;
    text = $(element).html();
    console.log($(element).attr('aria-expanded'));
    if($(element).attr('aria-expanded')==='true'){
        $(element).removeClass('btn-primary').addClass('btn-outline-danger');
        $('#mightInterestYou').addClass('d-none')
        

    }
    else{
        $(element).removeClass('btn-outline-danger').addClass('btn-primary');
        $('#mightInterestYou').removeClass('d-none');
       
    }
    
    

} */
/*
function interestTag(){
    $('#mightInterestYou').removeClass('d-none');
}
*/
function offCanvas(event){
    element = event.target;
    console.log(element);
    $('#modalImg').attr('src',element.src);
    $('#exampleModalLabel').text(element.alt);
}