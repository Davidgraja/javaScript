//codigo cuadrado
console.group("cuadrados");


function perimetroCuadrado(lado) {
  return  lado * 4 + " cm" ;
}


function  areaCuadrado(lado) {
  return  lado * lado + " cm^2";
}


console.groupEnd();


//codigo triangulo

console.group("triangulo")


function perimetroTriangulo(lado1 , lado2 , base ){
  return lado1 +lado2 + base  + " cm";
}


function  areaTriangulo(base, altura){
  return (base *  altura ) / 2 + " cm^2";
}

console.groupEnd();


//codigo  circuferencia
console.group("circulo")


//Diametro

function diametroCirculo(radio){
  return radio * 2 ;
}

//PI
const PI = Math.PI;

//perimetro
function perimetroCirculo(radio){
   let diametro = diametroCirculo(radio);
   return  diametro * PI;
 }

//area
function areaCirculo(radio){
    return ( radio * radio ) * PI + " cm^2";
}


console.groupEnd()
