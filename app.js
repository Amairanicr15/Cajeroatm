//Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas.
let cuentas = [
    { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
    { nombre: "Luis", saldo: 290, password: 'l33t' },
    { nombre: "Carlos", saldo: 67, password: '123' }
  ];

  function ingresar(){
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById('contrasena').value;

    //Validar los datos de los inputs
    varlidarUsuarioLogin(usuario, contrasena);
  } 

  function varlidarUsuarioLogin (usuario, contra){
    let usuariValido = false;
    for(let i = 0; i < cuentas.length; i++){
        if(usuario === cuentas[i].nombre && contra === cuentas[i].password){
            //Definir qué pasará si son correctos
            //alert('Datos Correctos');
            usuariValido = true;
            mostrarMenuHTML(i)
            return
        } 
    }
    //Definir qué pasará si son incorrectos 
    if(!usuariValido){
        alert('Datos incorrectos');
    } 
  }



  function mostrarMenuHTML(posicionUsuario){
    document.getElementById("inicio").style.display = "none";
    

    //Mostrar menú opciones 
    document.getElementById("acciones").style.display = "block";
  
    //Mostrar nombre en el saludo
    // 1. Obtener elemento a modificar a través de su id e ingresar el nombre del usuario 
    document.getElementById("nombre-usuario").innerText = cuentas[posicionUsuario].nombre

    //Añadir funciones a los botones desde Js con ayuda de eventListener
    //consultat saldo
    
    document.getElementById("consultar").addEventListener('click', function(){
        //alert('El saldo actual es de: $' + cuentas[posicionUsuario].saldo)
        //no usar un alert poner el saldo a consultar en un elemento HTML
        //Opc1. Crear un elemento HTML 

        //Opc2. El elemento ya está creado en el HTML y sólo lo rellenamos 
        document.getElementById("info").innerText = 'El saldo actual es de: $' + cuentas[posicionUsuario].saldo
        mostrarMenuHTML(posicionUsuario);
    });


    document.getElementById("retirar").addEventListener('click', 
    function () {
            let retiro = prompt("Escribe cuánto quieres retirar:")
            retiro = Number(retiro); 
            if(cuentas[posicionUsuario].saldo - retiro < 10){
                alert('Error - No puedes tener menos de 10$');
                return
            } else {
                cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - retiro;
                //alert(cuentas[posicionUsuario].saldo - retiro)
        document.getElementById("info").innerText = 'El saldo actual es de: $' + cuentas[posicionUsuario].saldo
        // mostrarMenuHTML(posicionUsuario);  
            } 
});


document.getElementById("ingresar").addEventListener('click', 
    function () {
            let ingresar = prompt("Escribe cuánto quieres ingresar:")
            ingresar = Number(ingresar);
            if(cuentas[posicionUsuario].saldo + ingresar > 990){
                alert('Error - No puedes tener más de 990$');
                return
            } else {
                cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo + ingresar;
                //alert(cuentas[posicionUsuario].saldo + ingresar)
        document.getElementById("info").innerText = 'El saldo actual es de: $' + cuentas[posicionUsuario].saldo
        // mostrarMenuHTML(posicionUsuario); 
            } 
           
});



}

function salir(posicionUsuario){
    alert('Gracias por tu visita.')
   return window.location.reload()
     
};




//En lugar de usar esta funcion se construyó con una addEventListener
