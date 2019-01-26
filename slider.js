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

var feedBacks = 
[
	'Самоё ваще крутое',
	'Ваще огонь',
	'Раньше я нифига про это не знал, теперь знаю!',
	'Как пещерные люди без этого жили, кто-нибудь подскажет?',
	'Это появилось, когда я уже родилсся ура!',
	'Сколько без этой великолепной хрени прожито зря лет',
	'У меня в детстве такой штуковины не было, я очень страдал, не спал ночами, даже аппетита не было.',
	'Как только додумались такое изобрести!'
];

var currentLeftValue = 0;

function prepareSlider()
{
	var carousel = $('#carousel');
	var li, img, p;
	var i = 0;
	allCnt = images.length;
	var fbNum = 0;
	var page = '';
	var shortFB = '';
	var fb_len = feedBacks.length;
	var ind_comment = 0;
	
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
		
		shortFB = "ОТЗЫВ " + String(fbNum);
		
		ind_comment = Math.floor(Math.random() * fb_len);
		
		allSlides[i] = 
		{
			shFb: shortFB,
			fullFb: feedBacks[ind_comment],
			block: li
		};
		
		img = document.createElement("img");
		img.src = "imgs/users/" + images[i];
		
		p = document.createElement("p");
		p.innerHTML = "<span>" + shortFB + "</span>";
		
		li.append(img);
		li.append(p);
		
		carousel.append(li);
	}
	
	step = 128 + 25;
	curItem = 0;
	currentLeftValue = 0;
	
	page = String(curItem + 1) + '/' + String(allCnt - N + 1);
	$('#carousel-pages').empty().append(page);
}

function moveNext()
{
	var car = $("#carousel");
	var page = '';
	curItem++;
	
	if (curItem <= allCnt - N)
	{
		currentLeftValue -= step;
		car.animate({left: currentLeftValue + "px"}, 500);
		page = String(curItem + 1) + '/' + String(allCnt - N + 1);
		$('#carousel-pages').empty().append(page);
	}
	else
		curItem = allCnt - N;
}

function movePrev()
{
	var car = $("#carousel");
	var page = '';
	
	curItem--;
	if (curItem >= 0)
	{
		currentLeftValue += step;
		car.animate({left: currentLeftValue + "px"}, 500);
		page = String(curItem + 1) + '/' + String(allCnt - N + 1);
		$('#carousel-pages').empty().append(page);
	}
	else
		curItem = 0;
}
