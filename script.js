function adicionarTarefa() {
let texto = document.getElementById("tarefa").value;

if (texto === "") {
return;
}

let novaTarefa = document.createElement("li");

novaTarefa.textContent = texto;

document.getElementById("lista").appendChild(novaTarefa);
}
