/*
	Работа со слайдами
*/
var allSlides;
var N = 3; // количество картинок на одном слайде
var images =
[
	'1.jpg',
	'10.jpg',
	'11.jpg',
	'111.jpg',
	'12.jpg',
	'14.jpg',
	'19.jpg',
	'29.jpg',
	'38.jpg',
	'40.jpg',
	'43.jpg',
	'49.jpg',
	'51.jpg',
	'54.jpg',
	'61.jpg',
	'62.jpg',
	'63.jpg',
	'66.jpg',
	'70.jpg',
	'75.jpg',
	'8.jpg',
	'84.jpg',
	'87.jpg',
	'88.jpg',
	'92.jpg'
];

var currentLeftValue = 0;

function prepareSlider()
{
	var slide = $('#slider');
	var div, img, span;
	var i = 0;
	var len = images.length;
	
	slide.empty();
	allSlides = new Array();
	
	for (i = 0; i < len; i++)
	{
		div = document.createElement("div");
		div.classList.add("slide-item");
		allSlides[i] = div;
		
		img = document.createElement("img");
		//allSlides[i] = img;
		img.src = "imgs/users/" + images[i];
		
		span = document.createElement("span");
		span.innerHTML = "ОТЗЫВ";
		
		div.append(img);
		div.append(span);
		
		slide.append(div);
	}
	
	/*
	for (i = 0; i < N; i++)
	{
		allSlides[i].classList.remove("hide");
		allSlides[i].classList.add("show");
	}
	*/
}

function moveNext()
{
	var car = $("#carousel");
	currentLeftValue -= 150;
	car.animate({ left: currentLeftValue + "px"}, 500);
}

function movePrev()
{
	var car = $("#carousel");
	currentLeftValue += 150;
	car.animate({ left: currentLeftValue + "px"}, 500);
}

/*
function prepareSlider()
{
	var slide = $('#slider');
	
	var span; // = document.createElement("span");
	var img, curImg;
	var i = 0, sl = 0, sh = 0;
	var len = Math.ceil(images.length / N);
	
	slide.empty();
	
	allSlides = new Array();
	for (sl = 0; sl < len; sl++)
	{
		span = document.createElement("span");
		span.classList.add("spanSlide");
		allSlides[sl] = span;
		slide.append(span);
		sh = sl * N;
		for (i = 0; i < N; i++)
		{
			curImg = images[i + sh];
			if (curImg != null)
			{
				img = document.createElement("img");
				img.src = "imgs/users/" + curImg;
				span.append(img);
			}
		}
	}
	
	if (allSlides[0] != null)
		allSlides[0].classList.add("show");
}
*/