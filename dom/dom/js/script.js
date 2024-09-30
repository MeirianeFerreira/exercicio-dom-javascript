//DOM moveimentando-se nele
//console.log(document.body);
 
console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes);
 
//propriedade para acessar o elemento do título
console.log(document.body.childNodes[1].childNodes[1].textContent);
//a contagem é somente tags e conteudo  para acessar os elementos
 
 
console.log(document.body.childNodes[1].childNodes[1].textContent);
console.log(document.body.childNodes[5].childNodes[1].textContent);
 
 
//para corrigir o retorno dos filhos do nó, sem espaço em branco do texto
//utilize a linha de comonado abaixo
//dessa forma Header  estará na posição 0, main na posição 1 e footer na 2
 
console.log( document.body.children);
console.log(document.body.children[2].childNodes[1].textContent);
 
//selecionando o index
const listadeItens = document.getElementsByTagName("li")
console.log(listadeItens);
 
//selecionando elemento por id
const titulo = document.getElementById("titulo");
console.log(titulo);
 
//selecionando elementos por classe
const produtos = document.getElementsByClassName("produtos")
console.log(produtos);

//insertBefore
const paragrafo = document.createElement("p");
const header =  titulo.parentElement;
header.insertBefore(paragrafo, titulo);

//appendChild
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

//replaceChild
const h2 = document.createElement("h2");
h2.textContent = "Novo Título";
header.replaceChild(h2, titulo);

//criando um nó de texto
const meuTexto = document.createTextNode("Inserindo outro título");
console.log(meuTexto);

const h3 = document.createElement("h3");
h3.appendChild(meuTexto);
console.log(h3);

//setAttribete:define um valor getAttribute:acessa o valor de uma propriedade
const primeiroLink = navLinks.querySelector("a")
console.log(primeiroLink);

primeiroLink.setAttribute("href", "https://www.uol.com.br/");

//abrir em uma nova aba(
primeiroLink.setAttribute("target", "_blank");

//altura e largura
const footer = document.querySelector("footer");
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);

//getClientBouldingRect
const produtos1 = produtos[0];
console.log(produtos1.getBoundingClientRect());

//css com js
const mudarCor = document.getElementById("main-conteiner");
mudarCor.style.color = "red";
mudarCor.style.backgroundColor = "#000";
mudarCor.style.paddingBottom = "100px";

//HTML collection
//fazendo um loop no li e alterando a cor de fundo

for(const li of listadeItens){
    li.style.backgroundColor = "yellow";
    
}
