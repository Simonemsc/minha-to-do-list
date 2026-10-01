function adicionarTarefa() {
let texto = document.getElementById("tarefa").value;

if (texto === "") {
alert("Digite uma tarefa!");
return;
}

alert("Você adicionou: " + texto);
}
