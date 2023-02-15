function allowDrop(ev){
    ev.preventDefault(); //não deixar o navegador arrastar os objetos

}

//função arrasta, inicia um arrasto de elemento
//Setdata é um método pra escrever um dado
//dataTransfer, funcionalidades, transferencia de daddos
//set é escrever, arrastar
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}  

//drop vai soltar na div
//EV objeto de evento
function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
}