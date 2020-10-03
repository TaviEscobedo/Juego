

let e;
let palabra="cuarentena";
let atri;//atributo q se le va dar al DIV

//crea los espacios de la palabra a adivinar
function pintarEspacios(palabra){
  for(let i=0; i<palabra.length; i++)
    {
      e=document.createElement('div');
      e.setAttribute("class", "letra");
       //atri = document.createAttribute("class"); 
      //atri.value = "letra"; 
      //e.setAttributeNode(atri); 
      
       document.getElementById('play').appendChild(e);
    }
}

// resetea los valores de los divs
function limpiarEspacios(){
  for(let i=0; i<palabra.length; i++)
  {
      document.getElementsByTagName('div')[i].innerHTML='';
  }
}

function desactivarBoton(){
  const b= document.querySelector("button")
  b.setAttribute("disabled", "");
}
function activarBoton(){
  const b= document.querySelector("button")
  b.removeAttribute("disabled");
}

function mensaje(msje){
  const p=document.createElement('p');
  p.setAttribute("id", "mensaje");
  //const m=document.querySelector("#mensaje");
  p.innerHTML=msje;
  document.body.appendChild(p);
  setTimeout(()=>{
    p.remove();
  },3000);
}


//llama a la función
pintarEspacios(palabra);

let nroIntentos=1;

let rspta;
function lanzar(){
  rspta=prompt('ingrese una letra o la palabras');
  console.log(nroIntentos);
  if(nroIntentos==3 ){
    desactivarBoton();
    setTimeout(() => {
      limpiarEspacios();
      activarBoton();
     nroIntentos=1;
    }, 5000);
  }
  nroIntentos++;
  
   
//ingresa la palabra entera o sea adivina en un intento
if(rspta.length>1){
  
  if(rspta==palabra){
      const word=rspta.split('');
      console.log('Es correcto, ganaste!!');
      mensaje("Es correcto, ganaste!!");
      nroIntentos=0;
      desactivarBoton();
      for(let i=0; i<palabra.length; i++)
        {
            document.getElementsByTagName('div')[i].innerHTML=word[i];
        }
        
        setTimeout(() => {
          limpiarEspacios();
          activarBoton();
        }, 3000);
    
  }
  else{
    console.log('Fallaste!, no es la palabra :( ');
    mensaje('Fallaste!, no es la palabra :( ');
    
  }
}
else{
  //entran letras
  if(palabra.includes(rspta)){
    //console.log("contiene esa letra");
    
    //console.log(palabra.indexOf(rspta));
        for(let i=0; i<palabra.length; i++)
        {
          if(palabra[i]==rspta){

            const bloqueDivs=document.getElementsByTagName('div');
           // console.log('numero de divs',bloqueDivs.length);
            document.getElementsByTagName('div')[i].innerHTML=rspta;
          //console.log(i+1);
            
            }
        }//fin for
  
  }//fin IF
  else{
    console.log('no contiene esa letra!');
    mensaje('no contiene esa letra!');
  }
  
}
}//fin de lanzar()
//console.log(rspta);

