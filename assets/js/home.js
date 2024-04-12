const swiper = new Swiper(".swiper", {
  // Número de slides visíveis
  slidesPerView: 1,
  // Centraliza o slide ativo
  centeredSlides: true,
  // Rodar em loop
  loop: true,
  autoplay: {
    // Tempo de espera entre os slides (em milissegundos)
    delay: 6000,
    // Não para o autoplay quando interagir com o carrossel
    disableOnInteraction: false,
  },
  // Paginacao do slide
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Ativar o efeito fade
  effect: "fade",
});

// Atualiza o ultimo conteudo lancado no blog no slide da home
function newPost() {
  const newPostData = data.reverse()[Math.floor(Math.random() * data.length)];

  document.querySelector(".image-slider-blog").src = newPostData.imagem;
  document.querySelector(".title-slider-blog").innerHTML = newPostData.id == data.length - 1 ? "NOVIDADES NO BLOG!" : "CONTEÚDO DO BLOG!" 
  document.querySelector(
    ".link-slider-blog"
  ).href = `blog.html#${newPostData.id}`;
}

// Chama a funcao
newPost();
