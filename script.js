function Avaliar(estrela) {
 var url = window.location;
 url = url.toString()
 url = url.split("index.html");
 url = url[0];

 var s1 = document.getElementById("s1").src;
 var s2 = document.getElementById("s2").src;
 var s3 = document.getElementById("s3").src;
 var s4 = document.getElementById("s4").src;
 var s5 = document.getElementById("s5").src;
 var avaliacao = 0

if (estrela == 5){ 
 if (s5 == url + "estrela_vazia.svg") {
 document.getElementById("s1").src = "estrela_cheia.svg";
 document.getElementById("s2").src = "estrela_cheia.svg";
 document.getElementById("s3").src = "estrela_cheia.svg";
 document.getElementById("s4").src = "estrela_cheia.svg";
 document.getElementById("s5").src = "estrela_cheia.svg";
 avaliacao = 5;
 } else {
 document.getElementById("s1").src = "estrela_cheia.svg";
 document.getElementById("s2").src = "estrela_cheia.svg";
 document.getElementById("s3").src = "estrela_cheia.svg";
 document.getElementById("s4").src = "estrela_cheia.svg";
 document.getElementById("s5").src = "estrela_vazia.svg";

}}
 
 //ESTRELA 4
if (estrela == 4){ 
 if (s4 == url + "estrela_vazia.svg") {
 document.getElementById("s1").src = "estrela_cheia.svg";
 document.getElementById("s2").src = "estrela_cheia.svg";
 document.getElementById("s3").src = "estrela_cheia.svg";
 document.getElementById("s4").src = "estrela_cheia.svg";
 document.getElementById("s5").src = "estrela_vazia.svg";

 } else {
 document.getElementById("s1").src = "estrela_cheia.svg";
 document.getElementById("s2").src = "estrela_cheia.svg";
 document.getElementById("s3").src = "estrela_cheia.svg";
 document.getElementById("s4").src = "estrela_vazia.svg";
 document.getElementById("s5").src = "estrela_vazia.svg";
 avaliacao = 3;
}}

//ESTRELA 3
if (estrela == 3){ 
 if (s3 == url + "estrela_vazia.svg") {
 document.getElementById("s1").src = "estrela_cheia.svg";
 document.getElementById("s2").src = "estrela_cheia.svg";
 document.getElementById("s3").src = "estrela_cheia.svg";
 document.getElementById("s4").src = "estrela_vazia.svg";
 document.getElementById("s5").src = "estrela_vazia.svg";

 } else {
 document.getElementById("s1").src = "estrela_cheia.svg";
 document.getElementById("s2").src = "estrela_cheia.svg";
 document.getElementById("s3").src = "estrela_vazia.svg";
 document.getElementById("s4").src = "estrela_vazia.svg";
 document.getElementById("s5").src = "estrela_vazia.svg";

}}
 
//ESTRELA 2
if (estrela == 2){ 
 if (s2 == url + "estrela_vazia.svg") {
 document.getElementById("s1").src = "estrela_cheia.svg";
 document.getElementById("s2").src = "estrela_cheia.svg";
 document.getElementById("s3").src = "estrela_vazia.svg";
 document.getElementById("s4").src = "estrela_vazia.svg";
 document.getElementById("s5").src = "estrela_vazia.svg";

 } else {
 document.getElementById("s1").src = "estrela_cheia.svg";
 document.getElementById("s2").src = "estrela_vazia.svg";
 document.getElementById("s3").src = "estrela_vazia.svg";
 document.getElementById("s4").src = "estrela_vazia.svg";
 document.getElementById("s5").src = "estrela_vazia.svg";
 avaliacao = 1;
}}
 
 //ESTRELA 1
if (estrela == 1){ 
 if (s1 == url + "estrela_vazia.svg") {
 document.getElementById("s1").src = "estrela_cheia.svg";
 document.getElementById("s2").src = "estrela_vazia.svg";
 document.getElementById("s3").src = "estrela_vazia.svg";
 document.getElementById("s4").src = "estrela_vazia.svg";
 document.getElementById("s5").src = "estrela_vazia.svg";
 
 } else {
 document.getElementById("s1").src = "estrela_vazia.svg";
 document.getElementById("s2").src = "estrela_vazia.svg";
 document.getElementById("s3").src = "estrela_vazia.svg";
 document.getElementById("s4").src = "estrela_vazia.svg";
 document.getElementById("s5").src = "estrela_vazia.svg";

}}
 
 document.getElementById('rating').innerHTML = avaliacao;
 
}

