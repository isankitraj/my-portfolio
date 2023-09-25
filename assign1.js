"use strict";

// selecting element using DOM api
const btn = document.querySelector(".show");
const contactInfo = document.querySelector(".contact__info");
const more = document.querySelector(".more");
const about = document.querySelector('.about')

// creating an paragraph element using js 
const moreInfo = document.createElement("p");

// settting content of paragrah element
moreInfo.textContent = ` Skilled in managing cloud infrastructure on AWS and proficient in major DevOps tools. I am passionate about continuous improvement and driving efficiency through automation. 
I am currently expanding my skillset by learning front-end development (HTML, CSS & JS). `;

// when the btn is clicked, hidden class will be removed and the content is visible.
btn.addEventListener("click", function () {
  contactInfo.classList.toggle("hidden");
});

// addidng the element to the more button when clicked.
more.addEventListener("click", function () {
    about.insertAdjacentElement('afterend', moreInfo)
});
