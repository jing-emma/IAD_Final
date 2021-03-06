/*Author: Guojun Zhang
 *Filename: course.js
 *Purpose: When click the course button on top menue
 *         ajax fetch chosen course base user role and name.  
 *         it will alowed display the content w/o direct the page
 *Call: by          
 *
 */

$(document).ready(function(){
       // pop up create course content box when 'Create content' is clicked
            $('a.create-content-window').click(function() {
          
                    //Getting the variable's value from a link 
                    var coursebox = $(this).attr('href');

                    //Fade in the Popup
                    $(coursebox).fadeIn(300);

                    //Set the center alignment padding + border see css style
                    var popMargTop = ($(coursebox).height() + 24) /2; 
                    var popMargLeft = ($(coursebox).width() + 24) / 2; 

                    $(coursebox).css({ 
                            'margin-top' : -popMargTop,
                            'margin-left' : -popMargLeft
                    });

                    // Add the mask to body
                    //mask css define in popup.css
                    $('body').append('<div id="mask"></div>');
                    $('#mask').fadeIn(300);

                    return false;
            });
	
	
            // When clicking on the button close or the mask layer the popup closed
            //Attach an event handler for all elements which match the current selector, now and in the future.
            $('a.close').live('click', function() { 
                    $('#cc-reset').trigger('click');
                    $('#mask , .cCourse-popup').fadeOut(300 , function() {
                        //remove the element itself
                            $('#mask').remove();  
                    }); 
                    $('.video-box').fadeOut(300,function(){
                        $('.video-box').remove();
                        
                    });

                    /* may add function update the all course slideshow */
                    //constructAllCourse("course");

                    return false;
            });
			
	
	
	  // add a new course content
	$('#create-course-content').click(function(event) {
          
            if($('#course-content').val() !== undefined 
                && $('#course-content-description').val() !== undefined
                && document.getElementById('course-attachment').files[0] !== undefined){
             
                event.preventDefault();  
                var file = document.getElementById('course-attachment').files[0];
                var fd = new FormData();
                fd.append('upload_file', file);
                fd.append('action', "addcontent");
                fd.append('topic', $('#course-content').val());
                fd.append('description', $('#course-content-description').val());
                fd.append('courseid',$('.content').attr("course-id"));
                var xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function() {
                    if(xhr.readyState == 4){
                        if(xhr.status == 200) {
                            var message = xhr.responseText;
                            
                            if(message == "true"){
                                //close the create course pop up box
                                $('a.close').trigger('click');
                                //refresh the course page to show the new added course
                                window.location.reload();
                            }
                            /*have to add error check if server fails*/
                        }
                    }
                }
                xhr.open('POST', 'server/_course.php', true);
                xhr.send(fd);
                
            }
            
	});
        
        /*handle video play*/
        $('a.video').click(function() {

            event.preventDefault();

            //Getting the variable's value from a link 
            var videofile = $(this).attr('href');
            $('body').append('<div class="video-box"><a href="#" class="close"><img src="image/close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a><video width="700" height="500" controls="controls"><source src="'+videofile+'" type="video/webm; codecs=vp8, vorbis"><source src="'+videofile+'" type="video/mp4; codecs=avc1.42E01E, mp4a.40.2"/><source src="'+videofile+'" type="video/ogg; codecs=theora, vorbis" /></video></div>');
            //$('body').append('<div class="0popup-box"><a href="#" class="close"><img src="image/close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a><video class="video-box" width="700" height="500" controls="controls"><source class="video-box" src="'+videofile+'" type="video/webm; codecs=vp8, vorbis"><source src	="'+videofile+'" type="video/mp4; codecs=avc1.42E01E, mp4a.40.2"/><source src="'+videofile+'" type="video/ogg; codecs=theora, vorbis" /></video></div>');
            //$('body').append('<a href="#" class="close"><img src="image/close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a>');
            //Fade in the Popup
            $('.video-box').fadeIn(300);


            //Set the center alignment padding + border see css style
            var popMargTop = ($('.video-box').height() + 24) /2; 
            var popMargLeft = ($('.video-box').width() + 24) / 2; 

            $('.video-box').css({ 
                    'margin-top' : -popMargTop,
                    'margin-left' : -popMargLeft
            });

            // Add the mask to body
            //mask css define in popup.css
            $('body').append('<div id="mask"></div>');
            $('#mask').fadeIn(300);
            return false;
     });
});





