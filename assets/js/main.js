const form = document.querySelector("#form");
const newTask = document.querySelector("#newTask");
const total = document.querySelector("#total");
const suma = document.querySelector("#suma")
const completed = document.querySelector("#completed")
const checking = document.querySelector("#cheking")
let checkBox = document.getElementById("myCheck1");

let arrayTasks = [
    { id: Date.now() + 1, name: "Pasear a mi mascota", done: false },
    { id: Date.now() + 2, name: "Tomar desayuno", done: false },
    { id: Date.now() + 3, name: "Limpiar arenero de Dominga", done: false },
]

const render = () => {
    total.innerHTML = "";
    let contar = 0
    arrayTasks.forEach((item) => {
        total.innerHTML +=
            `<div>
          ${item.id}  
          ${item.name} 
           <button onclick="eliminar(${item.id})">eliminar</button> 
            <label for="myCheck">Realizada:</label>
            <input ${item.done ? "checked" : ""} onchange="completar(${item.id})" type="checkbox">`
        contar = contar + 1
    },

    );
    suma.innerHTML = contar
    completed.innerHTML = arrayTasks.filter((item) => item.done).length
}

render();
const eliminar = (id) => {
    arrayTasks = arrayTasks.filter((item) => item.id !== id);

    render();
};

const completar = (id) => {

    arrayTasks.forEach((item) => {
        if (item.id === id && !item.done) {
            item.done = true
        } else if (item.id === id && item.done) {
            item.done = false
        }
    })
    render()
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    arrayTasks.push({
        id: Date.now(),
        name: newTask.value,
        done: false,
    });
    render();
    newTask.value = "";
});