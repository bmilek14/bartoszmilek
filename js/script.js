$(function () {
  $("#kimjestem").click(function () {
	$('.content').fadeOut("200", function(){
        $('.content').replaceWith('<div class="content">' 
		
		+'<div id="kimjestemtext"><h1>Bartosz Miłek</h1> Aktualnie jestem studentem ekonomii na Uniwersytecie Wrocławskim Wydziału Prawa Administracji i Ekonomii. Zawodowo pracuję jako programista - webdeveloper - freelancer. </br> Moje zainteresowania to historia, ekonomia (od finansów domowych po teorie ekonomiczne), polityka oraz psychologia. </br> Jestem sympatykiem ugrupowań wolnościowych oraz kuchni azjatyckiej.</br></br></div>'
		
		
		+ '</div>');
    });
	
  });

});
		
$(function () {

  $("#kontakt").click(function () {
  $('.content').fadeOut("200", function(){
    $('.content').replaceWith('<div class="content">' 
	
	+ '<div id="kontakttext"><i class="icon-mail"></i><b>bmilek14@gmail.com</b></br></br><i class="icon-phone"></i><b>501 268 847</b></div>' 
	
	
	
	
	+ '</div>');
		});

	});

});

$(function () {
  $("#portfolio").click(function () {
	$('.content').fadeOut("200", function(){
        $('.content').replaceWith('<div class="content">' + 
		
		
		'<div id="portfoliotext">Projekty niekomercyjne</br><a href="https://www.github.com"  target="_blank"><img src="git.png" alt="git" height="100" width="100" style="margin: 15px 0px 40px 0px;"></a></br>Projekty graficzne</br></br><a href="https://pl.pinterest.com/bmilek14" target="_blank"><img src="pinterest.png" alt="pinterest" height="80" width="80"></a> </div>'
		
		
		+ '</div>');
    });
	
  });

});
		
$(function () {

  $("#skills").click(function () {
  $('.content').fadeOut("200", function(){
    $('.content').replaceWith('<div class="content">' + 
	
	'<div id="skillstext"><h5>Front-end</h5><div id="frontend"><img src="frontend.png" alt="html5 css3 js" height="78" width="150"></div><div id="statusfrontend"><b>75%</b></div><div style="clear: both;"></div><h5>Framework</h5><div id="framework"><img src="wordpress.png" alt="wordpress" height="50" width="50"></div><div id="statusframework">33%</div><div style="clear: both;"></div></div>'
	
	+ '</div>');
	$("#statusfrontend").animate({width: "225px"});
	//$("#statusbackend").animate({width: "100px"});
	$("#statusframework").animate({width: "100px"});
		});

	});

});