$(".animsition").animsition({
    inClass: 'zoom-in'
});

$(document).ready( function () {
	
	words = ['autonome', 'actif', 'autodidacte', 'communicatif', 'curieux', 'motivé', 'déterminé', 'ouvert', 'social', 'geek', 'apprenti', 'passionné', 'jeune']
  
  var timer     = 100,
      fadeSpeed =  400;
  
  var count = words.length;
  var position, x, myLoop;

  $('#tagline').html(words[rand(count)]);

	function rand(count) {
		x = position;
		position = Math.floor(Math.random() * count);
		if (position != x) {
      return position;
    } else {
      rand(count);
    }
	}
	
	function newWord() {
    //clearTimeout(myLoop); //clear timer
    
    // get new random number
    position = rand(count);
    
    // change tagline
    $("#tagline").fadeOut(fadeSpeed, function() {
      $(this).html(words[position]).fadeIn(fadeSpeed);
    });
    myLoop = setTimeout(function() {newWord()}, timer);
  }
  
  myLoop = setTimeout(function() {newWord()}, timer);

});