var base = document.querySelector("#base")
var height = document.querySelector("#height")
var btn = document.querySelector("#area")
var outputDiv = document.querySelector("#output-div")
var outputSpan = document.querySelector("#output-bar")

btn.addEventListener("click",function area(){
outputDiv.style.display = "block";
outputSpan.innerText = 0.5*base.value*height.value
})