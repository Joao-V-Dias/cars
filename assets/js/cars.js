const swiper = new Swiper(".swiper", {
  // Número de slides visíveis
  slidesPerView: 1,
  // Centraliza o slide ativo
  slidesPerView: 'auto',
  centeredSlides: true,
  // Rodar em loop
  loop: true,
  autoplay: {
    // Tempo de espera entre os slides (em milissegundos)
    delay: 6000,
    // Não para o autoplay quando interagir com o carrossel
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Ativar o efeito fade
  effect: "fade",
});

function getCars(cars){
  cars.map((car)=>{
    const slide = document.createElement("div");
    slide.setAttribute("class", "swiper-slide");
    document.querySelector(".swiper-wrapper").appendChild(slide);

    const background = document.createElement("div");
    background.setAttribute("class", "background");
    slide.appendChild(background);

    const backgroundTriangle = document.createElement("div");
    backgroundTriangle.setAttribute("class", "background-triangle");
    background.appendChild(backgroundTriangle);

    const dataCar = document.createElement("div");
    dataCar.setAttribute("class", "name-car");
    slide.appendChild(dataCar);

    

    const h3 = document.createElement("h3");
    h3.innerHTML = car.marca.toUpperCase()
    dataCar.appendChild(h3);

    const titleSlide = document.createElement("h1");
    titleSlide.setAttribute("class", "title-slide");
    titleSlide.innerHTML = car.nome.toUpperCase()
    dataCar.appendChild(titleSlide);

    const image = document.createElement("img");
    image.setAttribute("class", "img-car");
    image.src = car.url
    slide.appendChild(image);
  })
}

// Chama funcao
getCars(cars)