const sliderImages = document.querySelector('#project-list__images');
const sliderBtnDot = document.querySelector('.dot');
const sliderItems = Array.from(sliderImages.children);
const sliderBtnNext = document.querySelector('.slider-btn-next');
const sliderBtnPrev = document.querySelector('.slider-btn-prev');


sliderItems.forEach(function(slide, index) {
  if(index !==0) slide.classList.add('hidden');
  slide.dataset.index = index; 
  sliderItems[0].setAttribute('data-active','');
  
})


sliderBtnNext.onclick = function() {
  showNextSlide('next');
}

sliderBtnPrev.onclick = function() {
  showNextSlide('prev');
}


function showNextSlide(direction){
  const currentSlide = sliderImages.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');

  let nextSlideIndex;
  if(direction === 'next'){
    nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  }else if(direction === 'prev'){
    nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex -1;
  }

  const nextSlide = sliderImages.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');
}




