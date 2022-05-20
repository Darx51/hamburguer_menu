
export default function speachReader(){
  const $select = document.getElementById("id-select");
  const $textArea = document.getElementById("id-text-area");
  const $btn = document.getElementById("btn-speach");


  const speachMessage = new SpeechSynthesisUtterance(); // guardara  la API que permite leer el texto

  //console.log(speachMessage);         //en la propiedad voz, le asignaremos una voz de las que tiene nuestro Navegador 

  // 'speechSynthesis'                                  //es un objeto que tiene la propiedad 'onvoicechanged' el cual usaremos para cambiar de una voz a otra
  // y tambien usaremos su propiedad 'name' para mostrar en el select
  //console.log(speechSynthesis.getVoices());       // .getVoices() es un prototipo  que me muestra todas las voces que mi naveegador me provee
  
  let voices = [];


                                                              /* Despues de argar el documento me traera las voces al elegir el select */
  document.addEventListener("DOMContentLoaded", e=>{          // como tiene un 'DOMContentLoaded' dentro de la funcion, toda esta funcion padre la sacamos del 
                                                               // DOMContentLoaded general en el archivo index.js
  
    //console.log(document.SpeechSynthesis);
   // console.log(document.SpeechSynthesis.getVoives());            //este eevnto debe ejecutarse dentro de 'voicechange'

    window.speechSynthesis.addEventListener("voiceschanged", e=>{       
      //console.log(e);                                            //al ejecutar el evento "voiceschanged" del .speechSynthesis, se genera una voz
      voices = window.speechSynthesis.getVoices();                  // y ahora si puedo obtener las voces
      
      //console.log(voices);
      voices.forEach( voz =>{                                       // Aqui obtenemos y generamos todas las voces en el select

        const $option = document.createElement("option");
              $option.value = voz.name;
              $option.textContent = `${voz.name} - ${voz.lang}`;

              $select.appendChild($option);             
      })
    })
  })      


  document.addEventListener("change", e=>{                  //el codigo siguiente se ejecutara al cambiar el selec por eso va en el addEventListener "change"
    if(e.target === $select){                                 // si el objeto que origina el evento es el select o 'comboBox'

                                                              // accedemos a la propiedad .voice de la variable 
      speachMessage.voice = voices.find( voice => voice.name === e.target.value);         //'speachMessage'entonces buscamos la voz elegida en el select
                                                                                //la variable voice busca una coincidencia y 
                                                                // y si algun nombre de la voz en el navegador coincide con la voz del value elegida en el select
                                                                // me la asignara a la propiedad voice de SpeechSynthesisUtterance
                                                                // en este caso la tenemos en 'speachMessage'
      //console.log(speachMessage);
    }
  })    
  
                                                         // el click del boton
  document.addEventListener("click", e=>{ 
    if(e.target===$btn){
      speachMessage.text = $textArea.value;
      window.speechSynthesis.speak(speachMessage);
    }
  })                


}