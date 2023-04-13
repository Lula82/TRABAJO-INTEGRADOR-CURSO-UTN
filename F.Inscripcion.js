function habilitar() {
    nombre = document.getElementById("nombre").value
    correo = document.getElementById("correo").value
    select = document.getElementById("select").value
    
    val = 0

    if (nombre == "") {
        val++;
    }


    if (correo == "") {
        val++;
    }


    if (select == "") {
        val++;
    }

    if (val == 0) {
        document.getElementById("btn").disabled = false;

    } else {
        document.getElementById("btn").disabled = true;

    }

}
document.getElementById("nombre").addEventListener("keyup", habilitar);
document.getElementById("correo").addEventListener("keyup", habilitar);
document.getElementById("select").addEventListener("change", habilitar);
document.getElementById("btn").addEventListener("click", () => {
    alert("haz llenado todo")
});


// Obtener datos del formulario

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
e.preventDefault();
let nombre = document.querySelector("#nombre").value;
let correo = document.querySelector("#correo").value;
let select = document.querySelector("#select").value;


console.log(nombre, correo, select);
document.getElementById("nombre").value="";
document.getElementById("correo").value="";
document.getElementById("select").value="";

})

