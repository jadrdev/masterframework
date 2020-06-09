var nombre = "Joshua Díaz";
var altura = "150";
/*
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");

datos.innerHTML = `<h1> Soy la caja de datos </h1>
<h2> mi nombres es: ${nombre} </h2>
<h2> mi altura es ${altura} </h2>
`;

if (altura >= 169) {
    datos.innerHTML += '<h1> Eres una persona alta</h1>';
}else{
    datos.innerHTML += '<h1> Eres una persona bajita</h1>';
}

for(var i = 2000; i <= 2020; i++){
    datos.innerHTML += "<h2> Estamos en el año:"+i;
}
*/

function MuestraMiNombre(nombre,altura) {

var misDatos= `<h1> Soy la caja de datos </h1>
<h2> mi nombres es: ${nombre} </h2>
<h2> mi altura es ${altura} </h2>
`;

return misDatos;

}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Joshua", 120);

}

imprimir();

var nombres = ['Joshua', 'Yasmina', 'Iriome', 'Iraya'];

/*
document.write('<h1>Mi familia</h1>')
    for (i= 0; i < nombres.length; i++) {   
        document.write(nombres[i] + '<br />');
    }
*/

nombres.forEach((nombre) => {
    document.write(nombre + '<br />');
});

var coche = {
    modelo: 'Ford Fiesta Trend',
    velocidad: '250',
    antiguedad: '2015',
    matricula: '2501JDY',
    mostrarDatos(){
        console.log(this.modelo,this.matricula,this.antiguedad);

    },
    propiedad1: "Valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1> Matricula:" +coche.matricula+"");
coche.mostrarDatos();
console.log(coche);

var saludar = new Promise((resolve, reject) => {
setTimeout(() => {
    let saludo = "Hola mundo";
    saludo = false;

    if(saludo) {
        resolve(saludo);
    }else{
        reject('No hay saludo');
    }
}, 2000);

});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
})