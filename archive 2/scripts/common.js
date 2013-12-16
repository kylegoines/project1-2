/* site jquery */

$(document).ready(function() {
	
	$('#main-people').click(function(){
  	    window.location = 'healthypeople.php';
	}); 
	$('#main-environments').click(function(){
  	    window.location = 'healthyenvironments.php';
	});
	$('#main-knowledge').click(function(){
  	    window.location = 'healthyknowledge.php';
	});
	$('#main-investments').click(function(){
  	    window.location = 'healthyinvestments.php';
	});
	
	$('#circleLogo').click(function(){
  	    window.location = '#letter';
	});
	
	/* main splash roll overs */
	$('#main-people').mouseover(function(){
   		 $('#splash-people').css('display','block');
		 $('#splash-default').css('display','none');
    });
    $('#main-people').mouseout(function(){
         $('#splash-people').css('display','none');
		 $('#splash-default').css('display','block');
    });
	
	$('#main-environments').mouseover(function(){
   		 $('#splash-environments').css('display','block');
		 $('#splash-default').css('display','none');
    });
    $('#main-environments').mouseout(function(){
         $('#splash-environments').css('display','none');
		 $('#splash-default').css('display','block');
    });
	
	$('#main-knowledge').mouseover(function(){
   		 $('#splash-knowledge').css('display','block');
		 $('#splash-default').css('display','none');
    });
    $('#main-knowledge').mouseout(function(){
         $('#splash-knowledge').css('display','none');
		 $('#splash-default').css('display','block');
    });
	
	$('#main-investments').mouseover(function(){
   		 $('#splash-investments').css('display','block');
		 $('#splash-default').css('display','none');
    });
    $('#main-investments').mouseout(function(){
         $('#splash-investments').css('display','none');
		 $('#splash-default').css('display','block');
    });
	
});


