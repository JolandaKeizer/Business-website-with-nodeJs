//jQuery for event detail pages

//Initialising parallax

      $(document).ready(function(){
      $('.parallax').parallax();
    });  

 //Parallax
 // jquery events page. shmuel --------$(document).ready(function(){
        
// photo gallery arousles 

  $(document).ready(function(){
      $('.carousel').carousel();

      $('.parallax').parallax();

      $('.materialboxed').materialbox();
        
       // Next slide
      $('.carousel').carousel('next');
      $('.carousel').carousel('next', 3); // Move next n times.
      // Previous slide
      $('.carousel').carousel('prev');
      $('.carousel').carousel('prev', 4); // Move prev n times.
      // Set to nth slide
      $('.carousel').carousel('set', 4);
  });

//jQuery for event card filters*/

//Displaying festival cards depending on neighbourhood .class filter*/
$(document).ready(function () {
	
	$("#noord-button").on("click", function() {
		$(".eventresults").find(".zuid").fadeOut();
		$(".eventresults").find(".west").fadeOut();
		$(".eventresults").find(".oost").fadeOut();
		$(".eventresults").find(".noord").fadeToggle();
		$(".section").find(".addbuttons").fadeIn();
		});

	$("#oost-button").on("click", function() {
		$(".eventresults").find(".zuid").fadeOut();
		$(".eventresults").find(".noord").fadeOut();
		$(".eventresults").find(".west").fadeOut();
		$(".eventresults").find(".oost").fadeToggle();
		$(".section").find(".addbuttons").fadeIn();
	});

	$("#zuid-button").on("click", function() {
		$(".eventresults").find(".noord").fadeOut();
		$(".eventresults").find(".oost").fadeOut();
		$(".eventresults").find(".west").fadeOut();
		$(".eventresults").find(".zuid").fadeToggle();
		$(".section").find(".addbuttons").fadeIn();
	});

	$("#west-button").on("click", function() {
		$(".eventresults").find(".zuid").fadeOut();
		$(".eventresults").find(".noord").fadeOut();
		$(".eventresults").find(".oost").fadeOut();
		$(".eventresults").find(".west").fadeToggle();
		$(".section").find(".addbuttons").fadeIn();
	});
});	

/*Displaying festival cards depending on additional .class filter, eg music vs culture etc*/

$(document).ready(function () {

	$("#dance-button").on("click", function() {
		$(".eventresults").find(".foodie").fadeOut();
		$(".eventresults").find(".music").fadeOut();
		$(".eventresults").find(".culture").fadeOut();
		$(".eventresults").find(".dance").fadeToggle();
		});

	$("#foodie-button").on("click", function() {
		$(".eventresults").find(".music").fadeOut();
		$(".eventresults").find(".culture").fadeOut();
		$(".eventresults").find(".dance").fadeOut();
		$(".eventresults").find(".foodie").fadeToggle();
		});

	$("#music-button").on("click", function() {
		$(".eventresults").find(".dance").fadeOut();
		$(".eventresults").find(".culture").fadeOut();
		$(".eventresults").find(".foodie").fadeOut();
		$(".eventresults").find(".music").fadeToggle();
		});

	$("#culture-button").on("click", function() {
		$(".eventresults").find(".dance").fadeOut();
		$(".eventresults").find(".music").fadeOut();
		$(".eventresults").find(".foodie").fadeOut();
		$(".eventresults").find(".culture").fadeToggle();
		});

	$("#showall-button").on("click", function() {
		$(".eventresults").find(".card").fadeIn();
		});
});	

