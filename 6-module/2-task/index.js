'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;
    this.carouselItemNumber = 0; // инициализируем начальный слайд
    this.renderCarouselOuter();
    this.renderCarouselInner(this.carouselItemNumber);    

    this.el.addEventListener('click', event => this.scrollCarousel(event));
    
  }

  renderCarouselOuter(){
    this.el.insertAdjacentHTML('beforeend', `
    <div id="mainCarousel" class="main-carousel carousel slide">
    <ol class="carousel-indicators">
        <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
    </ol>
    <div class="carousel-inner" id="carousel-inner">
        <!--Вот здесь будет активный слайд-->
    </div>

    <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
    </div>`);
  }

  renderCarouselInner(itemNumber){
    let container = document.getElementById('carousel-inner');
    container.innerHTML = `
      <div class="carousel-item active">
      <img src="assets/images/default-slide-img.jpg" alt="Activelide">
      <div class="container">
          <div class="carousel-caption">
              <h3 class="h1">${this.slides[itemNumber].title}</h3>
              <div>
                  <a class="btn" href="#" role="button">
                      View all DEALS
                      <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                  </a>
              </div>
          </div>
      </div>
      </div>
    `;
  }

  scrollCarousel(event){
    
    let length = +this.slides.length -1;

    if (event.target.className === 'carousel-control-next') {     
      
      if(this.carouselItemNumber < length) {
        this.carouselItemNumber++;
      } else {
        this.carouselItemNumber = 0;
      }        
    }

    if (event.target.className === 'carousel-control-prev') {
     
      if(this.carouselItemNumber == 0) {
        this.carouselItemNumber = length;
      } else {
        this.carouselItemNumber--;
      }      
    }

    if (event.target.className === 'carousel-indicators') alert('indicators!');

    this.renderCarouselInner(this.carouselItemNumber);

    
  }

}


// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
