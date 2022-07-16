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


const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("games");
  const product = document.querySelectorAll(".game");
  const pname = storeitems.getElementsByTagName("h1");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h1")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
