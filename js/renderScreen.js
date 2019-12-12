function renderScreen(screen, game, requestAnimationFrame) {
  const context = screen.getContext("2d");
  clearScreen(context);

  //Renderizar players
  for (const playerId in game.state.players) {
    const player = game.state.players[playerId];
    // createPlayer(context, player.x, player.y, player.h, player.w);
  }

  for (const id in game.state.cards) {
    const card = game.state.cards[id];
    createCard(context, card);
  }

  createCard(context, 1, 1, 100, 150);
  requestAnimationFrame(() => {
    //renderScreen(screen, game, requestAnimationFrame);
  });
}

function clearScreen(context) {
  context.fillStyle = "white";
  context.fillRect(0, 0, 100, 100);
}

function createPlayer(context, x, y, h, w) {
  context.fillStyle = "black";
  context.fillRect(x, y, h, w);
}

function createCard(ctx, card) {
  ctx.strokeRect(card.x, card.y, card.w, card.h);

  ctx.font = "1rem Arial"; //Define Tamanho e fonte
  ctx.fillStyle = "black"; //Define a cor
  ctx.fillText(card.lote, card.x, card.y + 10); //Desenha a mensagem
  ctx.fillText(card.preco, card.x, card.y + 20); //Desenha a mensagem
}
