fetch("data/config.json")
.then(res=>res.json())
.then(data=>{

 let pg = document.getElementById("pgGames");
 let pra = document.getElementById("praGames");

 data.pg.forEach(g=>{
  pg.innerHTML += gameCard(g);
 });

 data.pragmatic.forEach(g=>{
  pra.innerHTML += gameCard(g);
 });

});

function gameCard(g){
 return `
 <div class="game-card" onclick="openGame('${g.folder}')">
 <img src="${g.image}">
 <p>${g.name}</p>
 </div>
 `;
}

function openGame(folder){
 window.location = `games/${folder}/game.html`;
}

