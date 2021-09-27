const angle1 = document.querySelector("#angle-1")
const angle2 = document.querySelector("#angle-2")
const angle3 = document.querySelector("#angle-3")
const checkBtn = document.querySelector("#check-triangle")
const outputDiv =document.querySelector("#output-bar")



checkBtn.addEventListener("click", main)

function main()
{
    if(angle1.value!=0 && angle2.value!=0 && angle3.value!=0 )
    {
        
        
        if(Number(angle1.value)+Number(angle2.value)+Number(angle3.value) === 180)
        {
            outputDiv.innerText = "Yes,it is a valid triangle"
        }
        else{
            outputDiv.innerText = "The angles given by you does not form a triangle"
        }
    }
    else
    {
        outputDiv.innerText = "You cannot have a triangle with one of the angles at zero degree"
    }
}