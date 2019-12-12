class Game {
  state = {
    players: [{ x: 1, y: 1, h: 4, w: 4 }],
    cards: [
      {
        x: 0,
        y: 0,
        h: 100,
        w: 150,
        image: "https://i.imgur.com/ZKMnXce.png",
        cor: "#C33B30",
        lote: "Morumbi",
        preco: 400,
        aluguel: 10,
        aluguel1casa: 40,
        aluguel2casa: 60,
        aluguel3casa: 180,
        aluguel4casa: 320,
        hotel: 450,
        casa: 50,
        hipoteca: 30,
        servico: 0,
        tipo: "lote",
        dono: ""
      }
    ],
    screen: {
      width: 10,
      height: 10
    }
  };

  constructor() {}
}

const game = new Game();
const screen = document.getElementById("screen");
renderScreen(screen, game, requestAnimationFrame);
