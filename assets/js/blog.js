function main() {
  // Recebe a URL da pagina
  const url = window.location.href;
  // Recebe a Id da URL
  const index = url.indexOf("#");

  // Verifica a posicao da ID na URL se, nao tiver, index == -1
  if (index !== -1) {
    // Recebe o que tem depois de #
    const id = url.substring(index + 1);
    // Chama a funcao de renderizar o conteudo da pagina
    content(id);
    // Chama a funcao de renderizar o conteudo do menu lateral
    rendererMenuSide(id);
  } else {
    // Tira a div de conteudo se nao tiver Id
    document.querySelector(".show-content").style.display = "none";
    // Chama a funcao de renderizar os cards da pagina
    renderer(data.reverse());
  }

  // Para pegar 40% da pagina e dar um scroll deste tamanho
  const position = window.innerHeight * 0.4;

  // Adiciona evento em todos os cards
  document.querySelectorAll(".blog-card").forEach((btn) => {
    btn.addEventListener("click", function () {
      // Pega o link do botao clicado
      const newLink = this.getAttribute("href");
      // Adiciona o link na URL
      window.location.href = newLink;
      // Direciona o scroll da pagina
      window.scrollTo(0, position);
      // Atualiza a pagina
      window.location.reload();
    });
  });
}

// Atualiza a pagina quando clica em voltar ou avancar no navegador
window.addEventListener("popstate", () => {
  location.reload();
});

// Renderizar o menu lateral
function rendererMenuSide(id) {
  // Flex end-para o menu ficar no canto da pagina
  document.querySelector(".container").style.justifyContent = "flex-end";
  // Armazenar cards aleatorios para colocar no menu lateral
  const dataMenu = [];
  // Inicia contador do while
  let i = 0;
  // While que adiciona os dados do card no dataMenu para quando os dados for diferente dos que ja tem na variavel ou do conteudo da tela
  while (i < 4) {
    // Seleciona IDs de forma aleatoria e adiciona ao dataMenu
    const numID = Math.floor(Math.random() * data.length);
    if (numID != id && dataMenu.indexOf(data[numID]) == -1) {
      dataMenu.push(data[numID]);
      i++;
    }
  }
  // Chama a funcao de renderizar os cards da pagina
  renderer(dataMenu);
}

// Renderiza os cards
function renderer(data) {
  data.map((item) => {
    const card = document.createElement("a");
    card.setAttribute("class", "blog-card");
    card.setAttribute("href", "blog.html#" + item.id);
    document.querySelector(".container").appendChild(card);

    const image = document.createElement("img");
    image.setAttribute("src", item.imagem);
    card.appendChild(image);

    const title = document.createElement("h2");
    title.innerHTML = item.titulo;
    card.appendChild(title);
  });
}

// Adiciona os conteudos da pagina aos elementos html
function content(id) {
  const image = document.querySelector(".img-content");
  const title = document.querySelector(".title-content");
  const text = document.querySelector(".text-content");

  data.map((item) => {
    if (item.id == id) {
      image.src = item.imagem;
      title.innerHTML = item.titulo;
      text.innerHTML = item.texto;
    }
  });
}

// Inicia o codigo do blog
main();
