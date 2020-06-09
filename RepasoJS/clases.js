class  coche {
    constructor(modelo, velicidad, antiguedad){
      this.modelo = modelo;
      this.velicidad = velicidad;
      this.antiguedad = antiguedad;  
    }

    aumentarvelocidad(){
        this.velicidad += 1;
    }

    reducirvelicidad(){
        this.velicidad -=1;
    }
}

class guagua extends coche{
    constructor(modelo, velicidad, antiguedad){
        super(modelo, velicidad, antiguedad);
        this.altura = 5;
    }

    mostrataltura(){
        return "La altura de la guagua es de "+this.altura;
    }
}

var coche1 = new coche ('BMW', 200, 2020);
var coche2 = new coche ('Audi', 100, 2020);
var coche3 = new coche ('Ferrari', 200, 2020);
var coche4 = new coche ('Ford', 200, 2020);
var coche5 = new coche ('Mercedes', 200, 2020);

var guagua1 = new guagua ('Pegasus', 600, 2020);

console.log(coche1);

console.log(guagua1.mostrataltura());

document.write("<h1>Velicidad: "+coche1.velicidad+"</h1>");
coche1.aumentarvelocidad();
coche1.aumentarvelocidad();
coche1.aumentarvelocidad();

console.log(coche1);
document.write("<h1>Velicidad: "+coche1.velicidad+"</h1>");