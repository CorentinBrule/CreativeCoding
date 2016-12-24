
$(document).ready(function() {
		$('#lArrow').on('click', function() { // Au clic sur un élément
			step = (document.querySelector('#column').offsetWidth)/2+8;
			console.log(step);
			$('#column').animate( {
				 scrollLeft: '-='+step
			 }, 500 ); // Go

		});
		$('#rArrow').on('click', function() { // Au clic sur un élément
			step = (document.querySelector('#column').offsetWidth)/2+8;
			console.log(step);

			$('#column').animate( {
				 scrollLeft: '+='+step
			 }, 500 ); // Go

		});
	});
