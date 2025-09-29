"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Robert Pilkington  
      Date: 09/27/2025   

      Filename: project05-03.js
*/

//Global variables
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;

// Heading constant
const heading = "H2";


for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
    //create anchor
    if(n.nodeName === heading) {
        let anchor = document.createElement("a")
        anchor.name = "doclink" + headingCount;
    // anchor insert before the first child
        n.insertBefore(anchor, n.firstChild);

        let listItem = document.createElement("li");
        let link = document.createElement("a");
        listItem.appendChild(link);
        link.textContent = n.textContent;
        link.href = "#doclink" + headingCount;
        toc.appendChild(listItem);
        headingCount ++;

    }
}