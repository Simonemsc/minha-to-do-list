function adicionarTarefa() {
let texto = document.getElementById("tarefa").value;

if (texto === "") {
return;
}

let novaTarefa = document.createElement("li");

novaTarefa.textContent = texto;

novaTarefa.onclick = function() {
novaTarefa.style.textDecoration = "line-through";
};

document.getElementById("lista").appendChild(novaTarefa);

document.getElementById("tarefa").value = "";
}
