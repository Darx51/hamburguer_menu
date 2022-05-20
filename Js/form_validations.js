
export default function contactFormValidations(){
  const $form = document.querySelector(".contact-form");
  const $inputs = document.querySelectorAll(".contact-form [required]");

  //console.log($inputs);
  $inputs.forEach((input)=>{                            //para cada input que sea requerido    Y SE EJECUTARA SOLO CUANDO SEA VALIDO PARA LA EXPRESION REGULAR
    const $span = document.createElement("span");                                               //QUE CREAREMOS MAS ADELANTE
          $span.id = input.name;                       //el 'id' sera el nombre de cada input
          $span.textContent = input.title;
          $span.classList.add("contact-form-error","none");      //a ese span tendra 2 clases, tanto la de de error y la de none
          input.insertAdjacentElement("afterend",$span);    //el span se creara despues del final de cada input
  })

  /* delegacion de eventos con keyUp */                         //EL PATRON ES LA OBLIGACION DE LA EXPRESION REGULAR
  document.addEventListener("keyup",(e)=>{
    if(e.target.matches(".contact-form [required]")){                 //si se da click en algun input de tipo requerido
    let $input = e.target;
    let pattern = e.target.pattern || e.target.dataset.pattern;         // si el input donde soltamos la tecla tiene un 'patron' 
                                                                       //  'O' si tiene un 'data-atribut'
      
      if(pattern && $input.value!==""){            //si el input tiene un patron y no esta vacio
        //console.log(`${pattern} con patron`);
        let regex = new RegExp(pattern);              //almacenamos el patron en la expresion regular, la cual usaremos para validar cada input
        
        return !regex.exec($input.value)                                    //si el contenido del input no es valido para la expresion regular
        ?document.getElementById($input.name).classList.add("is-active")            //aplica la clase de error
        :document.getElementById($input.name).classList.remove("is-active");        //si es valida para la expresion regular quita la clase de error

      }

      if(!pattern){           // si el input no tiene un patron
        //console.log(`${pattern} sin patron`);
        return $input.value===""                                            //si el input esta vacio
        ?document.getElementById($input.name).classList.add("is-active")            //agregale la clase de error
        :document.getElementById($input.name).classList.remove("is-active");         // si no quitale la clase de error
      }
    }
  })

  /* boton submit */
  document.addEventListener("submit", (e)=>{
    //e.preventDefault();
    alert("enviado");
    const $loader = document.querySelector(".contact-form-loader");
    const $response = document.querySelector(".contact-form-response");

    $loader.classList.remove("none");                                     // al momento en que el formulario se procese se debe quitar el none
                                                                          // del SVG loader para que se vea que se esta enviando
    setTimeout(()=>{
      $loader.classList.add("none");                                        //desaparecera despues de 3 segundos
      $response.classList.remove("none");                                   // y aparecera un mensaje que los datos se han enviado exitosamente
      $form.reset();                                                        //durante 3 segundos

      setTimeout(() => $response.classList.add("none"),2000);               //y al mismo tiempo al cumplir esos 3 segundos, se vovlera a ocultar el mensaje 
    },2000);

  });                                                                     
}