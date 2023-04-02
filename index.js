const mostrarUOcultar = () => {
    let imagen1 = document.getElementById("bandera korea")
    let imagen2 = document.getElementById("bandera japon")

    if (imagen1.classList.contains("d-none")

    ) {
        imagen1.classList.remove("d-none")
        imagen2.classList.add("d-none")
    }

    else {
        imagen1.classList.add("d-none")
        imagen2.classList.remove("d-none")

    }
}

setInterval(mostrarUOcultar, 1000)