$(document).ready(function()
{
	$("#menu").on("click", "a", function (event)
	{
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	
	prepareSlider();
});

/*
	Работа с флипаками
*/
var flippers = document.getElementsByClassName('flip-container');

function changeFlip(flip, isOn)
{
	if (isOn == 0)
		flippers[flip].classList.remove('hover');
	else
		flippers[flip].classList.add('hover');
}


