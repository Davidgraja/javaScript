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
const  perimetroCirculo=(radio) =>  diametroCirculo(radio) * PI ;

//area
const areaCirculo= (radio) => ( radio * radio ) * PI ;

// interaccion con el html

// obtenccion   las etiquetas padres , del formulario y de la entrega de informacion 
const inputs= document.getElementById('inputs')
const resultado= document.getElementById('entrega-resultados')

//creaccion de etiquetas para la seccion Resultados 
/** */
var circuloMensaje="";

const perimetro = document.createElement('p');
perimetro.textContent='perimetro'; 

const diametro= document.createElement('p')
diametro.textContent="Diametro";

const area= document.createElement('p');
area.textContent="Area";

const detallePerimetro = document.createElement('div');
const detalleDiametro= document.createElement('div');
const detalleArea=document.createElement('div');



// evento circulo
const elementoHtml= document.createElement('label');
elementoHtml.textContent='Radio'; 
const inputRadio= document.createElement('input'); 

const circulo = document.getElementById('circulo') ;
circulo.addEventListener('click', circuloEvento);
 function circuloEvento(){
    inputs.appendChild(elementoHtml) ;  
    elementoHtml.appendChild(inputRadio)


    resultado.appendChild(diametro);
    resultado.appendChild(detalleDiametro);
    resultado.appendChild(perimetro);
    resultado.appendChild(detallePerimetro);
    resultado.appendChild(area);
    resultado.appendChild(detalleArea);
    circuloMensaje="circulo";
}

//evento trinagulo
const lado1 = document.createElement('label');
lado1.textContent="Lado 1";
const inputLado1 = document.createElement("input");

const lado2 =document.createElement('label');
lado2.textContent="Lado 2 ";
const inputLado2= document.createElement('input');

const triangulo= document.getElementById('triangulo');
triangulo.addEventListener('click',trianguloEvento);
function trianguloEvento(){
    inputs.appendChild(lado1);
    lado1.appendChild(inputLado1);
    inputs.appendChild(lado2);
    lado2.appendChild(inputLado2);
}

// evento boton calcular 
const buttomCalcular = document.getElementById('buttom');
buttomCalcular.addEventListener('click', buttonFuncion)
function buttonFuncion(){

    inputs.onsubmit=(e)=>{
        e.preventDefault();

        if(circuloMensaje == "circulo"){
            const valorRadio = inputRadio.value;
            inputRadio.value = "";
            detallePerimetro.innerText=  perimetroCirculo(valorRadio ) + " cm";
            detalleDiametro.innerText=diametroCirculo(valorRadio ) + " cm";
            detalleArea.innerText= areaCirculo(valorRadio) +  " cm^2"

        }
        
    }
}