export default function smartVideo(){                     // me traera todos los elementos 'video' y que tengan el atribute 'data-smart-video'
  const $videos = document.querySelectorAll("video[data-smart-video]")

  const callBack = (entries) =>{          //entries se genera automaticamente y se refiere a cada elemento que vaya entrando en la pantalla
    entries.forEach(entry => {              // para cada elemento que entra en la pantalla    
                              /*DEJA DE REPRODUCIR SI NO ESTA EN EL FOCO DE LA PAGINA */
      if(entry.isIntersecting){
        entry.target.play();
      }
      else{
        entry.target.pause();
      }

      /*   DEJAR DE REPRODUCIR AL CAMBIAR DE PESTANA  */
      document.addEventListener("visibilitychange", (evento) => {
      if (document.visibilityState === 'visible') {
        entry.target.play();
        //backgroundMusic.play();
      } else {
        entry.target.pause();
        //backgroundMusic.pause();
      }
    }
);
}

);
}

  const observer = new IntersectionObserver(callBack, {threshold: 0.5});   //en este caso la callback simplemente es la funcion que espera recibir 
                                                                           //y se reproducira al tener el 50% de haber entrado a la pantalla

  $videos.forEach((el)=>{           //por cada video ejecuta la funcion (observer y el metodo observe)
    observer.observe(el);            // y recibe como parametro el (el) que es el elemento que va observar, el video en este caso
  }                                
  )
}


