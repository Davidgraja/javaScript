//codigo cuadrado

const perimetroCuadrado= (lado) =>   lado * 4  ;

const  areaCuadrado= (lado) =>   lado * lado ;

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

//triangulo isoceles

// function alturaIsoceles(lado1, lado2, base){
//     if(lado1 === lado2 && lado1 != base){
//         console.log('isoceles')
//         const altura = Math.sqrt(lado1**2 - base**2/ 4)
//         console.log(altura)
//     }
//     else{
//         console.log('no lo se')
//     }
// }
// alturaIsoceles(5, 6, 8)


function alturaIsoceles(lado1,lado2,base){
    if(lado1 == lado2 && lado1 != base){
       // console.log("es un isoceles")
        

        return Math.sqrt(lado1**2 - base ** 2 / 4)
        //console.log(altura)

    }

    
}
console.log(alturaIsoceles(5,5,4));




function areaIsoceles(ladoA , ladoB, base) {
    let altura = alturaIsoceles(ladoA , ladoB ,base)
    let area = (base * altura) / 2
    return area;

}

areaIsoceles(5,5,8);

function perimetroIsoceles(ladoA , ladoB, base){
    if(ladoA== ladoB && ladoA!= base){
        return  (2 * ladoA ) + base;
        
    }
    
}

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

const alturaI = document.createElement('p');
alturaI.textContent="altura";
const detalleAltura = document.createElement("div");


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

//evento triangulo isoceles 

const isoceles = document.getElementById("Triangulo-isoceles");
isoceles.addEventListener('click', isocelesFuncion);

function isocelesFuncion(){

    inputs.appendChild(lado1);
    lado1.appendChild(inputLado1);
    inputs.appendChild(lado2);
    lado2.appendChild(inputLado2);
    inputs.appendChild(base);
    base.appendChild(inputBase);

    
    resultado.appendChild(alturaI);
    resultado.appendChild(detalleAltura);
    resultado.appendChild(perimetro);
    resultado.appendChild(detallePerimetro);
    resultado.appendChild(area);
    resultado.appendChild(detalleArea);

    eventoMensaje = "isoceles";

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
            detallePerimetro.innerText=  perimetroCirculo(valorRadio )  ;
            detalleDiametro.innerText=diametroCirculo(valorRadio ) ;
            detalleArea.innerText= areaCirculo(valorRadio) ; 

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
            
            detallePerimetro.innerText = perimetroTriangulo(valorLado1,valorLado2, valorBase) ;
            detalleArea.innerText= areaTriangulo(valorBase, valorAltura) ;
        }

        else if(eventoMensaje=="cuadrado"){
            const valorlado= inputLado1.value;
            inputLado1.value="";
            detallePerimetro.innerText = perimetroCuadrado(valorlado);
            detalleArea.innerText = areaCuadrado(valorlado);
        }


        else if( eventoMensaje == "isoceles"){
            const lado1= inputLado1.value;
            const lado2= inputLado2.value;
            const base = inputBase.value;

            inputLado1.value= "";
            inputLado2.value="";
            inputBase.value="";

            detalleAltura.innerText= alturaIsoceles(lado1,lado2,base);
            detallePerimetro.innerText = perimetroIsoceles(lado1, lado2 ,base);
            detalleArea.innerText = areaIsoceles(lado1 ,lado2 ,base);
           if(detalleAltura.innerText == "undefined" || detalleAltura.innerText=="NaN"){
                detalleAltura.innerText= "No fue posible calcular "
            }

            if(detallePerimetro.innerText== "undefined" || detallePerimetro.innerText=="NaN"){
                detallePerimetro.innerText = "No fue posible calcular "
            }

            if(detalleArea.innerText== "undefined" || detalleArea.innerText == "NaN") {
                detalleArea.innerText = "No fue posible calcular"
            }
            
            
        }
        
    }
}

const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener('click', borrar);

function borrar(){
    if(eventoMensaje=="circulo"){
        detallePerimetro.innerText="";
        detalleArea.innerText="";
        detalleDiametro.innerText="";
    }

    else if(eventoMensaje=="triangulo"){
        detallePerimetro.innerText="";
            detalleArea.innerText="";
    }
    else if(eventoMensaje=="cuadrado"){
            detallePerimetro.innerText="";
            detalleArea.innerText="";
    }

    else if (eventoMensaje == "isoceles"){
        detalleAltura.innerText= "";
        detallePerimetro.innerText= "";
        detalleArea.innerText = "";

    }


}