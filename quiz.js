var q1 = document.querySelectorAll(".q-1")
var q2 = document.querySelectorAll(".q-2")
var q3 = document.querySelectorAll(".q-3")
var outputDiv =document.querySelector(".output")
var span =document.querySelector("#output-span")

var score=0;


q1[1].addEventListener("click",function (){score++})
q2[0].addEventListener("click",function(){score++})
q3[2].addEventListener("click",function main()
{
 score++;
 output()
})

q3[0].addEventListener("click" ,output)
q3[1].addEventListener("click" ,output)
q3[3].addEventListener("click" ,output)

function output()
{
    document.querySelector("#quest-1").style.display = "none" 
    document.querySelector("#quest-2").style.display = "none" 
    document.querySelector("#quest-3").style.display = "none" 
    outputDiv.style.display = "block"
    span.innerText = score;
}



