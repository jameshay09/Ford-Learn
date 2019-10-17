	var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
		
		if (clicks > 3) 
		{
      	$('.PASS').show();  
		$('.FAIL').hide();
	 	}
		else if(clicks < 3)
		{
      	$('.PASS').hide();  
		$('.FAIL').show();
		}
		
}
	 

	var flags = 0;
    function hasClick() {
        flags += 1;
        document.getElementById("flags").innerHTML = flags;
		
		if (flags > 2 && flags < 4 ) 
			{
      			$('.PASS1').show();  
				$('.FAIL1').hide();
	 		}
		
		else if (flags > 4) 
			{
				$('.FAIL1').hide();
				$('.PASS1').hide();
      			$('.CHEAT').show();
		alert('You have clicked to many time');
				$('.videoclick').hide();
	 		}
		
		else if (flags < 2) 
			{
      			$('.PASS1').hide();  
				$('.FAIL1').show();
	 		}
		
  }
  



$(document).ready(function() {

/* Question One */	
	$('.q1').click(function() {
        $('.q-one').hide();
		$('.TheoryQuestion_txt1').hide();
		$('.carimg1').hide();
		
		$('.q-two').show();
		$('.TheoryQuestion_txt2').show();
		$('.carimg2').show();
    });

/* Question Two */		
	$('.q2').click(function() {
        $('.q-two').hide();
		$('.TheoryQuestion_txt2').hide();
		$('.carimg2').hide();
		
		
		$('.q-three').show();
		$('.TheoryQuestion_txt3').show();
		$('.carimg3').show();
    });
	
/* Question Three */		
	$('.q3').click(function() {
        $('.q-three').hide();
		$('.TheoryQuestion_txt3').hide();
		$('.carimg3').hide();
		
		$('.q-four').show();
		$('.TheoryQuestion_txt4').show();
		$('.carimg4').show();
	});
	
/* Question Four */
	$('.q4').click(function() {
        $('.q-four').hide();
		$('.TheoryQuestion_txt4').hide();
		$('.carimg4').hide();
		
		
		$('.q-five').show();
		$('.TheoryQuestion_txt5').show();
		$('.carimg5').show();
    });
	
/* harzard preeption */	
	$('.q5').click(function() {
        $('.q-five').hide();
		$('.TheoryQuestion_txt5').hide();
		$('.carimg5').hide();
		
		$('.hazardQuestion_txt1').show();
		$('.video').show();
		$('.videoclick').show();
		$('.arrowscore').show();
	});
	$('.arrowscore').click(function() {
		$('.hazardQuestion_txt1').hide();
		$('.video').hide();
		$('.videoclick').hide();
		$('.arrowscore').hide();
		
		$('.score').show();
		$('.scorehazard').show();
		$('.reset').show();
		
	});
	    
});