const entities = [
  { 
    img: '../images/project-img-one.jpg',
    dot: document.querySelector('.dot-one'),
    text: document.querySelector('.item-1'),
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months'
  },
  {
  	img: '../images/project-img-two.jpg',
    dot: document.querySelector('.dot-two'),
    text: document.querySelector('.item-2'),
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months'
 },
 {
 	img: '../images/project-img-three.jpg',
    dot: document.querySelector('.dot-three'),
    text: document.querySelector('.item-3'),
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months'
}
]

const slider = document.querySelector('.slider');
const sliderBtnPrev = document.querySelector('.slider-btn-prev');
const sliderBtnNext = document.querySelector('.slider-btn-next');

const setPhoto = (index) => {
	slider.style.backgroundImage = `url(${entities[index].img})`;
}
const makeActive = (index) => {
	entities[index].dot.style.opacity = 1;
	entities[index].text.classList.add('color-hypertext');
}
const makeNotActive = (index) => {
	entities[index].dot.style.opacity = 0.3;
	entities[index].text.classList.remove('color-hypertext');
}
const changeTextContent = (index) => {
	document.querySelector('.city').textContent = entities[index].city;
	document.querySelector('.area').textContent = entities[index].area;
	document.querySelector('.time').textContent = entities[index].time;
}
const pressOnElement = (index) => {
	makeNotActive(currentIndex);
	changeTextContent(index);
	currentIndex = index;
	setPhoto(currentIndex);
	makeActive(currentIndex);
}	
let currentIndex = 0;
sliderBtnPrev.addEventListener('click', () => {
	makeNotActive(currentIndex);

	if (currentIndex === 0) {
		currentIndex = entities.length - 1;
	} else {
		currentIndex -= 1;
	}

	changeTextContent(currentIndex);
	setPhoto(currentIndex);
	makeActive(currentIndex);
})
sliderBtnNext.addEventListener('click', () => {
	makeNotActive(currentIndex);

	if (currentIndex === entities.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex += 1;
	}

	changeTextContent(currentIndex);
	setPhoto(currentIndex);
	makeActive(currentIndex);
})
for (let i = 0; i <= entities.length - 1; i++) {
	entities[i].dot.addEventListener('click', () => {
		pressOnElement(i);
	});
	entities[i].text.addEventListener('click', () => {
		pressOnElement(i);
	});
}