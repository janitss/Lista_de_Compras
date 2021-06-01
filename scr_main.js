let input = document.getElementById("item-input");
let input_qtde = document.getElementById("item-input-qtde");
let input_um = document.getElementById("item-input-um");
let button = document.getElementById("item-button");
let ul = document.getElementById("items");
let itemButtons = document.getElementsByClassName("remove");

function criarElemento() {
  
  if ( input.value !== "" && input_qtde.value !== "") {
 
    let li = document.createElement("li");

    let xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.className = "remove";

    li.appendChild(xButton);
    
    if (input_um.value === "" ) {
      input_um.value = "UN";
    };
    
    let text = document.createTextNode( input_qtde.value  + ' - ' + (input_um.value).toUpperCase() +  ' - ' +  (input.value).toUpperCase() );
    li.appendChild(text);

    ul.appendChild(li);

    input.value = "";
    input_qtde.value = "";
    input_um.value = "";
    buttonEvents();    
  }
}

function deleteItem() {
  this.parentElement.remove();
}

function buttonEvents() {
  for (let i = 0; i < itemButtons.length; i++) {
    itemButtons[i].addEventListener("click", deleteItem);
  }
}

button.addEventListener("click", criarElemento);
buttonEvents();