let vehiculo, modelo, tipo, placa, fecha, horas, cantidad_horas
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerDatos()
    })
    
    function LeerDatos() {
        vehiculo = document.getElementById('vehiculo').value
        modelo = document.getElementById('modelo').value
        tipo = document.getElementById ('tipo').value
        fecha = document.getElementById ('fecha').value
        horas = document.getElementById ('horas').value
        cantidad_horas = document.getElementById ('cantidad').value
        ValidarData(vehiculo,modelo,tipo,fecha,horas,cantidad)
        GuardarLocalStorage (vehiculo,modelo,tipo,fecha,horas,cantidad_horas)
    }
    
    function ValidarData(vehiculo, modelo, tipo, fecha, horas, cantidad_horas) {
    
        
        {
    
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
    }
    
    function GuardarLocalStorage(vehiculo,modelo,tipo,fecha,horas,cantidad_horas) {
        localStorage.setItem('Vehiculo',vehiculo)
        localStorage.setItem ('Modelo',modelo)
        localStorage.setItem('Tipo',tipo)
        localStorage.setItem('Fecha',fecha)
        localStorage.setItem('Horas',horas)
        localStorage.setItem('Cantidad_Horas',cantidad_horas)

        ListarData()
    }
        function ListarData() {
            let vehiculoUsu = localStorage.getItem('Vehiculo')
            let modeloUsu = localStorage.getItem ('Modelo')
            let tipoUsu = localStorage.getItem ('Tipo')
            let fechaUsu = localStorage.getItem ('Fecha')
            let horasUsu = localStorage.getItem ('Horas')
            let cantidad_horasUsu = localStorage.getItem ('Cantidad_Horas')
            
        }
