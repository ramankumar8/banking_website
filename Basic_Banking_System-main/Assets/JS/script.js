let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName1 = document.getElementById("enterName").value;
   var enterAmount1 = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 10000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount1 = enterName1 + "BankBalance";
      var finalAmount1 = parseInt(document.getElementById(findUserBankAccount1).innerHTML) + enterAmount1;
      var myAccountBalance1 = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount1;
      document.getElementById("myAccountBalance").innerText = myAccountBalance1;
      document.getElementById(findUserBankAccount1).innerHTML = finalAmount1;
      alert(`Successful Transaction !!$${enterAmount1} is sent to ${enterName1}@email.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${enterAmount1} is sent to recepient with Email-id ${enterName1}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}

