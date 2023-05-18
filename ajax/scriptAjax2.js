window.onload = function() {
    var url ="http://api.openwheathermap.org/data/2.5/weather?";

    var minhaAPI = "9ebf423a80f5954f59d5980abb4516cd";

    var resultado;

    var cidade;

    cidades.onchange = function() {
        //criando um objeto ajax dependendo do navegador 
        var ajax = null;

        //Sse o navegador existir o XHTMLHTTPSRequest(), ele cria por essa metodologia
        if(window.XMLHttpRequest){
            ajax = new XMLHttpRequest();
            //se no navegador não existir ele usa ActivXObject
        }
        else if(window.ActiveXObject){
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        }
    }

    cidade = cidades.value;
    
    if(cidade != 0) {
    //abre a página txt via GET
        ajax.open("GET", url + 'appid' + minhaAPI + '&q=' + cidade + '&units=metric&lang=pt',true);

        //não envia nada
        ajax.send(null);
        //tenta identificar o estado de carregamento do conteudo
        ajax.onreadystatechange = function(){
            //verifica se o conteúdo chegou ao navegador
            if(ajax==4){
                if(ajax==200){
                    console.log(ajax.reponsivetxt);

                    // resultado = JSON.parse(ajax.responseText);

                    // console.log(resultado);

                    // console.log(resultado.name);

                    // console.log(resultado.main.temp_min);

                    // console.log(resultado.main.temp_max);

                    // console.log(resultado.weather[0].description);
                }
            }
        }
    }
};
