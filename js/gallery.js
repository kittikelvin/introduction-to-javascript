/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image*/
    document.getElementById('image').style.backgroundImage = `url('${ previewPic.src } ')`;

  /*  2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    document.getElementById('image').innerHTML = previewPic.alt;
  
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was*/

        document.getElementById('image').style.backgroundImage = "none";
   /* 2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
        document.getElementById('image').innerHTML = "Hover over an image below to display here.";
	}
   function initializeGallery(){

    console.log("message to make sure that events are triggered");// console log

    for(let i= 0; i< document.querySelectorAll('.preview').length; i++){
      document.querySelectorAll('.preview')[i].setAttribute('tabindex', '0');
      
      document.querySelectorAll('.preview')[i].addEventListener('mouseover', function(){
        upDate(this);
      } );

       document.querySelectorAll('.preview')[i].addEventListener('mouseleave', function(){
        unDo();
      } );

       document.querySelectorAll('.preview')[i].addEventListener('focus', function(){
        upDate(this);
      } );


       document.querySelectorAll('.preview')[i].addEventListener('blur', function(){
        unDo();
      } );
    }
   }
window.addEventListener('load', initializeGallery);