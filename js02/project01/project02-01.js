/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Robert Pilkington  
      Date:   09/05/2025 

      Filename: project02-01.js
 */
        // Functions for converting
        function FarenheitToCelsius(degree) {
            return (degree - 32) / 1.8;
        }

        function CelsiusToFarenheit(degree){
            return (degree * 1.8) + 32;
        }

        // Celsuis input change handler
         document.getElementById("cValue").onchange = function() {
            let cDegree = document.getElementById("cValue").value; 
            document.getElementById("fValue").value = CelsiusToFarenheit(cDegree)
         }
        // Farenheit input change handler
         document.getElementById("fValue").onchange = function(){
            let fDegree = document.getElementById("fValue").value; 
            document.getElementById("cValue").value = FarenheitToCelsius(fDegree)
        }       