const btn = document.querySelector(".dark-mode-btn");
const body = document.querySelector("html");
const titleTop = document.querySelector(".title-top");
const titleHeader = document.querySelector(".title-header");
const cells = document.querySelectorAll(".cell"); 
const nav = document.querySelector(".nav");
const btns = document.querySelectorAll("button");


let enabled = false; 

btn.addEventListener("click", function(e) {
    enabled = !enabled;
    if(enabled === true) {
        body.style.backgroundColor = "#1e2330";
        body.style.color = "white";
        titleTop.style.color = "white";
        btn.style.color = "white";
        titleHeader.style.color = "white";
        cells.forEach((cell) => {
            cell.style.backgroundColor = "#2d333b";
            cell.style.border = "1px solid #444c56";
            cell.style.border = "none";
        });
        
        nav.style.borderBottom = "2px solid white";
        btns.style.color = "white";
    
    } if (enabled === false) {
        body.style.backgroundColor = "white";
        titleTop.style.color = "#333";
        btn.style.color = "#333";
        titleHeader.style.color = "#333";
        cells.forEach((cell) => {
            cell.style.backgroundColor = "#00000048";
        });
        
        nav.style.borderBottom = "2px solid black";

         
        
    }
    console.log(enabled);
    
})