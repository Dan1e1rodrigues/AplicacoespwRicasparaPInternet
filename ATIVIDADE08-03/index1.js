var vcorfundo, vcorfonte, vnome
function defineCor(op,cor){
    // se op for igual a 1 alterna a cor de fundo
    if(op==1){
        document.body.style.backgroundColor=cor
    }else{
        document.body.style.color=cor
    }
}

{/* <form name = "dados">
    <label>Nome:</label><br>
    <input type="text" name="fnome" id="fnome" size="20"><br></br>
    <label>Cor fundo</label>
    </input>
</form> */}

function gravar(){
    //armazena o nome entrando no formulario na variavel vnome
    vnome=document.getElementById('fnome').ariaValueMax;
    //armazenando as informaçoes no localStorage
    localStorage.corfundo=vcorfundo
    localStorage.cortexto=vcorfonte
    localStorage.nome=vnome
}

//para finalziar, vai no formulario, no input do botao

