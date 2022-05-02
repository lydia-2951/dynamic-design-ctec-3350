$(function(){
// Navigation Interations 
//     1- Menu Toggler
//     2-Dropdown Toggler

// Menu Toggler
// 1. listen for a click on .navbar-toggler
// 2. store the property in the attribute "datatarget"
//3. use the attribute's value to select the navigation it wants to affect
$(".navbar-toggler").on("click", function(){ 
    let toggler = $(this).attr("data-target");
   $(toggler).toggleClass("open");
   $(this).toggleClass("toggled");
})



})