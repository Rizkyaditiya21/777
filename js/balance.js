function updateBalanceDisplay(){

 let balance = localStorage.getItem("balance");

 if(!balance){
  balance = Rp.100.000;
  localStorage.setItem("balance", balance);
 }

 document.getElementById("balance").innerText =
 "Saldo : " + balance;
}

updateBalanceDisplay();
