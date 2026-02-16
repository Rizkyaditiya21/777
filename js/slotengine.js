const symbols=["🍒","⭐","💎","🐉","7️⃣"];

function spin(){

 let reels=document.querySelectorAll(".reel");
 let result=[];

 reels.forEach(r=>{
  let s=symbols[Math.floor(Math.random()*symbols.length)];
  r.innerText=s;
  result.push(s);
 });

 checkWin(result);
}

function checkWin(res){

 let first=res[0];
 let count=res.filter(x=>x===first).length;

 if(count>=3){

  let win=200*count;
  let bal=parseInt(localStorage.getItem("balance"));
  bal+=win;
  localStorage.setItem("balance",bal);

  document.getElementById("result").innerText="WIN "+win;
 }else{
  document.getElementById("result").innerText="LOSE";
 }

 updateBalanceDisplay();
}

