/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
      Author: Robert Pilkington
      Date:   09/13/2025

     Filename: js03.js
 */

    // Days of the week
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Weekday evenet listener
    window.addEventListener("load", addWeekDays);

    //Funtion to write weekday names into the calendar 
    function  addWeekDays() {
        let i = 0; //initial counter value

        // Reference the collection of heading cells
        let headingCells = document.getElementsByTagName("th");

        // Write each of the seven days into a heading cell
        while (i < 7) {
            headingCells[i].innerHTML = weekDays[i];

            // Increase counter by 1
            i++;
        }
    }

    window.addEventListener("load", showGames);

    //Function to write game information into the calendar function showGames() 
    function showGames() {

        for (let i = 0; i < gameDates.length; i++) {
            let gameInfo = "";

            // Open the paragraph
            switch (gameResults[i]) {
                case "W":
                    gameInfo += "<P class='win'>";
                    break;
                case "L":
                    gameInfo += "<P class='lose'>";
                    break;
                case "S":
                    gameInfo += "<P class='suspended'>";
                    break;
                case "P":
                    gameInfo += "<P class='postponed'>";
                    break;
                
            }

            // Display game location
            if (gameLocations[i] === "h"){
                gameInfo += "Vs. ";
            } else if (gameLocations[i] === "a"){
                gameInfo += "@ ";
            }

            // Include Opponent
            gameInfo += gameOpponents[i] + "<br>";

            // Include result and score
            gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

            // Dispaly innings lpayed for suspended, shortened, or extraining games
            if (gameInnings[i] < 5) {
                gameInfo += " [" + gameInnings[i]+"]***";
            } else if (gameInnings[i] < 9) {
                gameInfo += " [" + gameInnings[i]+"]*";
            } else if (gameInnings[i] > 9) {
                gameInfo += " [" + gameInnings[i]+"]";
            }

            // CLose Paragraph
            gameInfo += "</p>";

            // Write the information into a table cell
            let tableCell = document.getElementById(gameDates[i]);
            tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
        }
    }