/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/
let hello1 =$('.hello');
console.log(hello1);
//!! This is Not what was asked. I reccomend checking out online to how to grab it. 
/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
let moveO =$('h1');
$('h1').mouseenter(function () {
   $('h1').css('height','20px',);
   $('h1').css('width','');

    $('h1').mouseleave(function () {
        $('h1').css('height','60px');
        // $('h1').css('width','-30')
    }) //!! You have this commented out to prevent the change. If you ever need assistance in understanding what's happening please ask 
});
// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */

let witClass = $('.hello');
witClass.click(function () {
    witClass.append('.')
});