debugger
let p = document.querySelector("p")
function validate(z){
    // p.textContent += z;
    p.textContent = p.textContent == "0" ? z:p.textContent + z
}

function clearthetext(){
    p.textContent = "0"
}

function finalresult(){
    p.textContent = eval(p.textContent)
}