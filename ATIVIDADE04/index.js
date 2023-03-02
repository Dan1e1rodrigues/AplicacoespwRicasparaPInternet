var pesoTotal = 0

function allowDrop(ev){
    ev.preventDefault()
};
function drag(ev){
    ev.dataTransfer.setData("text",ev.target.id);
};
function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));


    //adicionar ou subitrair o peso da imagem ao peso total(o da variavel)
if(ev.target.id === "div2"){
    pesoTotal += parseInt(ev.target.childNodes[0].getAttribute("data-peso"));
}
else if(ev.target.id === "div1"){
    pesoTotal -= parseInt(ev.target.childNodes[0].getAttribute("data-peso"));

//exibir o beso total na página
document.getElementById("pesoTotal").innerHTML = pesoTotal + "Kg"
}
};

function dragEnd(ev){
    if(ev.target.parentNode.id != "div2"){
        //subitrair o peso da imagem ao peso total
        pesoTotal -= parseInt(ev.target.getAttribute("data-peso"));
        //exibir o peso total na página
        document.getElementById("pesoTotal").innerHTML = pesoTotal + "Kg"
    } else if(ev.target.parentNode.id != "div1"){
        pesoTotal += parseInt(ev.target.getAttribute("data-peso"))
        document.getElementById("pesoTotal").innerHTML = pesoTotal + "Kg"

    }

};