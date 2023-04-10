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

