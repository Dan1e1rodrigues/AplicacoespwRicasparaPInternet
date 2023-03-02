var pesoTotal = 0;

function allowDrop(ev){
    ev.preventDefault(); //não deixar o navegador arrastar os objetos

}

//função arrasta, inicia um arrasto de elemento.

//Setdata é um método pra escrever um dado.

//dataTransfer, funcionalidades, transferencia de daddos.

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
    

//inicio

if(ev.target.id === "div2"){ 
    pesoTotal += parseInt(ev.target.childNodes [0].getAttribute("data-peso"));
}
else if(ev.target.id === "div1")
    pesoTotal -= parseInt(ev.target.childNodes [0].getAttribute("data-peso"));

//exibir o peso total na página 
document.getElementById("pesoTotal").innerHTML = pesoTotal + "kg"
}

function dragEnd(ev){
    if(ev.target.parentNode.id != "div2") {
        //subtarir o peso da imagem ao peso total
        pesoTotal -= parseInt(ev.target.getAttribute("data-peso"));

        //exibir o peso tptal na pagina
        document.getElementById("pesoTotal").innerHTML = pesoTotal + "kg"
    }
        else if(ev.target.parentNode.id != "div1") {
            pesoTotal += parseInt(ev.target.getAttribute("data-peso"));
            document.getElementById("pesoTotal").innerHTML = pesoTotal + "kg"
    }
}

