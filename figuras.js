//codigo cuadrado

const perimetroCuadrado= (lado) =>   lado * 4 + " cm" ;

const  areaCuadrado= (lado) =>   lado * lado + " cm^2";

//codigo triangulo

const perimetroTriangulo= (lado1 , lado2 , base ) =>  lado1 +lado2 + base;

const  areaTriangulo=(base, altura)=>(base *  altura ) / 2 ;

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
var eventoMensaje="";

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
    eventoMensaje="circulo";
}

//evento trinagulo
var lado1 = document.createElement('label');
lado1.textContent="Lado 1";
const inputLado1 = document.createElement("input");

var lado2 =document.createElement('label');
lado2.textContent="Lado 2";
const inputLado2= document.createElement('input');

const altura = document.createElement('label');
altura.textContent = 'Altura'
const inputAltura = document.createElement('input');

const base = document.createElement('label');
base.textContent="Base";
const inputBase = document.createElement("input");


const triangulo= document.getElementById('triangulo');
triangulo.addEventListener('click',trianguloEvento);
function trianguloEvento(){
    inputs.appendChild(lado1);
    lado1.appendChild(inputLado1);
    inputs.appendChild(lado2);
    lado2.appendChild(inputLado2);
    inputs.appendChild(base);
    base.appendChild(inputBase);
    inputs.appendChild(altura);
    altura.appendChild(inputAltura);

    resultado.appendChild(perimetro);
    resultado.appendChild(detallePerimetro);
    resultado.appendChild(area);
    resultado.appendChild(detalleArea);

    eventoMensaje="triangulo";
}

//evento cuadrado
const cuadrado = document.getElementById('cuadrado');
cuadrado.addEventListener('click',cuadradoEvento);
function cuadradoEvento(){
    lado1.textContent="Lado"
    inputs.appendChild(lado1);
    lado1.appendChild(inputLado1);

    resultado.appendChild(perimetro);
    resultado.appendChild(detallePerimetro);
    resultado.appendChild(area);
    resultado.appendChild(detalleArea);

    eventoMensaje="cuadrado";
}




// evento boton calcular 
const buttomCalcular = document.getElementById('buttom');
buttomCalcular.addEventListener('click', buttonFuncion)
function buttonFuncion(){

    inputs.onsubmit=(e)=>{
        e.preventDefault();

        if(eventoMensaje == "circulo"){
            const valorRadio = inputRadio.value;
            inputRadio.value = "";
            detallePerimetro.innerText=  perimetroCirculo(valorRadio ) ;
            detalleDiametro.innerText=diametroCirculo(valorRadio ) ;
            detalleArea.innerText= areaCirculo(valorRadio); 

        }

        else if(eventoMensaje == "triangulo" ){
            const  valorLado1= inputLado1.value;
            const valorLado2= inputLado2.value;
            const valorBase = inputBase.value;
            const valorAltura= inputAltura.value;
            inputLado1.value="";
            inputLado2.value= "";
            inputBase.value= "";
            inputAltura.value="";
            
            detallePerimetro.innerText = perimetroTriangulo(valorLado1,valorLado2, valorBase);
            detalleArea.innerText= areaTriangulo(valorBase, valorAltura);
            

        }

        else if(eventoMensaje=="cuadrado"){
            const valorlado= inputLado1.value;
            inputLado1.value="";
            detallePerimetro.innerText = perimetroCuadrado(valorlado);
            detalleArea.innerText = areaCuadrado(valorlado);

        }
        
    }
}