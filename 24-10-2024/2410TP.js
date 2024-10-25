//Manipulating DOM Elements.
let condiv = document.getElementById("container")
//i)Modify Content.
condiv.textContent = "Swarna"
condiv.innerText = "swarnalatha"
condiv.innerHTML = "<p>this is paragraph</p><span>This is span</span>"
console.log(condiv)