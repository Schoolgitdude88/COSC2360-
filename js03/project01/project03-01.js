/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Robert Pilkington
      Date:   09/13/2025
      
      Filename: project03-01.js
*/





 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
    // Event listener and calcTotal trigger
    let menuItems = document.getElementsByClassName("menuItem");
    for (let i= 0; i < menuItems.length; i++ ) {
        window.addEventListener("click", calcTotal);
    }

    function calcTotal() {
    let orderTotal = 0;
        for (i = 0; i < menuItems.length; i++ ) {
            if(menuItems[i].checked) 
            orderTotal += (Number(menuItems[i].value) * 1)
        }
    
            document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

