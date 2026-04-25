const produtos = [
  {
    nome: "Bacon Cheese",
    preco: 25,
    descricao: "Bacon, queijo e molho especial",
    img: "imgs/baconcheese.png"
  },
  {
    nome: "Salad Burger",
    preco: 20,
    descricao: "Hambúrguer leve e fresco",
    img: "imgs/salad burger.png"
  },
  {
    nome: "Classic Cheese Burger",
    preco: 20,
    descricao: "Hambúrguer leve e fresco",
    img: "imgs/classic-cheeseburger.png"
  },
  {
    nome: "Double Cheese Burger",
    preco: 20,
    descricao: "Hambúrguer leve e fresco",
    img: "imgs/double-cheeseburger.png"
  },
  {
    nome: "Triple Cheese Burger",
    preco: 20,
    descricao: "Hambúrguer leve e fresco",
    img: "imgs/triple-cheeseburger.png"
  },
  {
    nome: "Fresh Cheese Burger",
    preco: 20,
    descricao: "Hambúrguer leve e fresco",
    img: "imgs/fresh-cheeseburger.png"
  },
  {
    nome: "Gourmet Bacon Cheese",
    preco: 20,
    descricao: "Hambúrguer leve e fresco",
    img: "imgs/gourmet-baconcheese.png"
  }
];

const container = document.getElementById("destaques");

produtos.forEach((item) => {
  const card = document.createElement("div");

  card.classList.add("card", "item-dest", "bgitem");

  card.innerHTML = `
    <img src="${item.img}">
    <div class="inf">
        <h3>${item.nome}</h3>
        <p>${item.descricao}</p>
        <strong>R$ ${item.preco}</strong>
        <button>Pedir no WhatsApp</button>
    </div>
  `;

  // 👇 pega o botão DENTRO do card
  card.querySelector("button").onclick = () => {
    window.open(gerarLink(item.nome), "_blank");
  };

  container.appendChild(card);
});

card.querySelector("button").onclick = () => {
  window.open(gerarLink(item.nome), "_blank");
};

function gerarLink(produto) {
  return `https://wa.me/5517999999999?text=Olá! Quero pedir: ${produto}. Pode me atender?`;
}