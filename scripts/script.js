/*
Student Name: viet.nguyen_van
File Name: script.js
Date: 13/03/2022
*/

//love function
var flag = 0;

function love() {
    var heart = document.getElementById("ic-heart");
    if (flag === 0) {
        flag = 1;
        heart.innerHTML = "&#10084;";
        heart.style.fontSize = "20px";
        heart.style.color = "#7200A1";
    } else {
        heart.innerHTML = "&#9825";
        heart.style.fontSize = "23px";
        heart.style.color = "#fff";
        flag = 0;
    }
}