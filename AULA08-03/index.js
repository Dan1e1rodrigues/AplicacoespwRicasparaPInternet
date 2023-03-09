//Vamos criar uma variavel e armaznar um valor nela

var nome = window.prompt("Entre com o seu nome ");

//Vamos chamar o localstorage. Ele vem do window. Vamos usar o setItem

// window.localStorage.setItem("Nome", nome)

// Podemos escrever de uma maneira mais curta

// localStorage.setItem("Nome", nome);

// Para recuperar o valor armazenado em uma key do localstorage, usamos o getItem 

// alert.(localStore.gesetItem("Nome"));

//Se ao inves de apresentar a key em uma janela alert, quiser apresentar na pagina, podemos usar o documento 

// document.write("O seu nome é: " + nome + "");


// alert(localStorage.getItem("Nome"));

//Utilize o mesmo procedimento e crie variaveis para endereço, CPF, numeros de denpendentes 

var end = prompt("Qual e o seu endereço ?");
var cpf = prompt("Qual e o seu CPF ?");
var num = prompt("Qual e o numero de dependentes?");

localStorage.setItem("Nome", nome);
localStorage.setItem("endereço", end);
localStorage.setItem("CPF", cpf);
localStorage.setItem("Dependentes", num);

document.write("Seu nome é " +nome+ ""<br>);
document.write("Seu endereço é " +end+ "");
document.write("Seu cpf é" +cpf+ "");
document.write("Seu endereço é " +num+ "");