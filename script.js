fetch("game.txt")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";
    completedata.map((values) => {
      data1 += ` <div class="game">
          <h1 class="title">${values.title}</h1>
          <p class ="platform">${values.platform}</p>
          <p class="score">${values.score}</p>
          <p class="genre">${values.genre}</p>
          <p class="editors_choice">${values.editors_choice}</p>
        </div>`;
    });
    document.getElementById("games").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
