//codigo cuadrado

const perimetroCuadrado= (lado) =>   lado * 4 + " cm" ;

const  areaCuadrado= (lado) =>   lado * lado + " cm^2";

//codigo triangulo

const perimetroTriangulo= (lado1 , lado2 , base ) =>  lado1 +lado2 + base  + " cm";

const  areaTriangulo=(base, altura)=>(base *  altura ) / 2 + " cm^2";

//codigo  circuferencia

//Diametro
const diametroCirculo= (radio) =>  radio * 2 ;

//PI
const PI = Math.PI;

//perimetro
const  perimetroCirculo=(radio) =>  diametroCirculo(radio) * PI;

//area
const areaCirculo= (radio) => ( radio * radio ) * PI + " cm^2";
