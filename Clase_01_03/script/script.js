let nombre, correo, mensaje;
let formulario = document.getElementById ("formulario ")
formulario.addEventListener ("submit", (e)=>{
    e.preventDefault()
    leerDatos()

})
function leerDatos() {
    nombre = document.getElementById("nombre").value
    correo = document.getElementById("correo").value
    mensaje = document.getElementById("textarea").value
    validarData(nombre, correo, mensaje)
    Guardarlocalstorage(nombre, correo, mensaje)
}
function validarData(nombre,correo,mensaje) {
    if(nombre.length==0|| correo.length==0 || mensaje.length==0){

        swal.fire({
            title:"error!",
            Text: "do you want to continue",
            icon: "error",
            confirmButtonText: "cool",
            iconColor:"purple"
        })
    }
}
function Guardarlocalstorage (nombre, correo, mensaje) {
    localStorage.setItem("nombre", nombre)
    localStorage.setItem("correo", correo)
    localStorage.setItem("mensaje",mensaje)
    ListarData()
}
function ListarData () {
    let nombreUsu = localStorage.getItem("nombre")
    let correoUsu = localStorage.getItem("correo")
    let mensajeUsu = localStorage.getItem ("mensaje")
}
