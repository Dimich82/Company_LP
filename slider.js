/*
	Работа со слайдами
*/
var allSlides;
var N = 6; // количество картинок на одном слайде
var carW = 0; // ширина доступного пространства показа картинок
var nextLen = 0; //длина следующей картинки
var step = 0;
var allCnt = 0; // количество слайдов
var curItem = 0; // текущая позиция
var currentLeftValue = 0;

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
	var carousel = $('#carousel');
	var li, img, p;
	var i = 0;
	allCnt = images.length;
	var fbNum = 0;
	
	carousel.empty();
	allSlides = new Array();
	step = 0;
	
	carW = $("div.carousel-hider").outerWidth();
	
	for (i = 0; i < allCnt; i++)
	{
		fbNum = i + 1;
		li = document.createElement("li");
		//li.id = "item" + i;
		li.classList.add("carousel-item");
		allSlides[i] = li;
		
		img = document.createElement("img");
		img.src = "imgs/users/" + images[i];
		
		p = document.createElement("p");
		p.innerHTML = "<span>ОТЗЫВ " + fbNum + "</span>";
		
		li.append(img);
		li.append(p);
		
		carousel.append(li);
	}
	
	step = 128 + 25;
	curItem = 0;
	currentLeftValue = 0;
}

function moveNext()
{
	var car = $("#carousel");
	curItem++;
	
	if (curItem <= allCnt - N)
	{
		currentLeftValue -= step;
		car.animate({ left: currentLeftValue + "px"}, 500);
	}
	else
		curItem = allCnt - N;
}

function movePrev()
{
	var car = $("#carousel");

	curItem--;
	if (curItem >= 0)
	{
		currentLeftValue += step;
		car.animate({ left: currentLeftValue + "px"}, 500);
	}
	else
		curItem = 0;
}
