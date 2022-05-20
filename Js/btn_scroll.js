
export const btnscroll = (id) => {
  const $scrollBtn = document.querySelector(id);
  
  window.addEventListener("scroll", e=>{        // en este caso trabajaremos con el evento scroll del BOM 

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;     //la variable me devuelve un valor u otro por si algun navegador trabaja con uno u otro    
    //console.log(document.documentElement.scrollTop);                              //  muestra que tantos pixels me alejo del top de la pagina al ahcer scroll
    //console.log(window.pageYOffset);                                            // muestra que tantos pixels me alejo del top de la pagina al ahcer scroll
    if(scrollTop > 600){
      $scrollBtn.classList.remove("hidden-active");
      // document.querySelector(id).classList.remove(".hidden");
    }
    else{
      $scrollBtn.classList.add("hidden-active");
    }
  })


  document.addEventListener("click", e =>{        // tambien trabajaremos con el evento click del DOM
    if(e.target.matches(id)){
      /*console.log(e.target);*/ 
      window.scrollTo({               //recibe una serie de opciones 

        behavior:"smooth",
        top:0
        //left:0,
      }
      );

    }
  })

} 

