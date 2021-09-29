var num1 = document.querySelector("#num-1")
var num2 = document.querySelector("#num-2")
var btn = document.querySelector(".btn")
var outputSpan = document.querySelector("#output-bar")
var outputDiv = document.querySelector("#output-div")
var container = document.querySelector(".container")

btn.addEventListener("click",check)

function check()
{
    if(num1.value == 0 || num2.value == 0)
    {
        alert("Enter Non Zero values for side-1 and side-2")
    }
    else
    {
        calculate()
    }
    
}
function calculate()
{
    container.style.height = "80vh"
    outputDiv.style.display = "block"
   outputSpan.innerText = Math.sqrt( (Number(num1.value)*Number(num1.value)) + (Number(num2.value) * Number(num2.value)))

}