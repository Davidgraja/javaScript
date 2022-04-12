//codigo cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("Los lados de el cuadrado miden " + ladoCuadrado + "cm" );

const perimetroCuadrado = ladoCuadrado * 4 ;
console.log("el perimetro de el cuadrado es :  " + perimetroCuadrado) + "cm";

const areaCuadrado =  ladoCuadrado * ladoCuadrado;
console.log("el area del Cuadrado es : " + areaCuadrado + " cm^2" );
console.groupEnd();


//codigo triangulo

console.group("triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("los lados de el triangulo miden: " + ladoTriangulo1 +"cm ,"+ ladoTriangulo2 + "cm ,"+  " la base  mide: " + baseTriangulo + " cm");

console.log("la altura de el triangulo es de : " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 +baseTriangulo;
console.log("el perimetro de el triangulo es de : " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo* alturaTriangulo) / 2;
console.log("el area del triangulo es : " +areaTriangulo + "cm^2");

console.groupEnd();


//codigo  circuferencia
console.group("circulo")
//radio
const radiocirculo = 4;
console.log("el radio de el circulo es : " + radiocirculo + " cm");
//Diametro
const diametroCirculo = radiocirculo * 2;
console.log("el Diametro de el circulo es : " + diametroCirculo + " cm");

//PI
const PI = Math.PI;
console.log("el valor de PI es : " + PI);

//perimetro
 const  perimetroCirculo = diametroCirculo * PI;
 console.log("el perimetro de el circulo es : " + perimetroCirculo +  " cm");

//area
const areaCirculo = (radiocirculo * radiocirculo ) * PI;
console.log("el area del circulo es : " + areaCirculo + " cm^2");

console.groupEnd()
