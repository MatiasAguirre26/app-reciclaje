// metodo para guardar datos en el localStorage

guardar_localStorage();

function guardar_localStorage (){
    let nombre = "Leonardo";

    let persona = {
        nombre: "leonardo",
        edad: 25,
        correo: "xxx@gmail.com",
    };
    localStorage.setItem("nombre",nombre);
    localStorage.setItem("persona",JSON.stringify(persona));
}

// datos para obyener informacion del localStorage

// obtener_localStorage();

function obtener_localStorage(){
    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"));


    console.log(nombre);
    console.log(persona);
}