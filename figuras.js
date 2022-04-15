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

// interaccion con el html

const inputs= document.getElementById('inputs')
console.log(inputs)


const buttomFormulario = document.getElementById('buttom') 
const circulo = document.getElementById('circulo') ;

circulo.addEventListener('click', circuloFuncion)


function circuloFuncion(){
    //inputs.innerHTML="<label > lado <input id='lado' type='number'/ ></label>"
    
    
}


const ladoCirculo= document.getElementById('lado')
buttomFormulario.addEventListener('click', buttonFuncion)
function buttonFuncion(){
    console.log(inputs)
}