


export default function carrusel(){
  const $slidesDom = document.querySelectorAll(".slider-slide");
  const $atras= document.querySelector(".slider-btns .prev");
  const $next= document.querySelector(".slider-btns .next");

  let i=0;
  document.addEventListener("click", (e)=>{
    
    if(e.target === $atras){
      e.preventDefault();
      

      $slidesDom[i].classList.remove("active");
      i--;      
      
      if(i< 0){
        i = $slidesDom.length - 1;      //recordar que .lenght me trae el numero total de elemtos, no el numero de la posicion
      }                                       //o sea retrocede una posicion
      $slidesDom[i].classList.add("active");

    }

    if(e.target === $next){
      e.preventDefault();

      $slidesDom[i].classList.remove("active");
      i++;   
      if(i >= $slidesDom.length){
        console.log($slidesDom.length);
        i = 0;   //igualo a cero para volver al lugar donde empezo   //recordar que .lenght me trae el numero total de elemtos, no el numero de la posicion
      }                                       //o sea retrocede una posicion
      $slidesDom[i].classList.add("active");
    }



  });



}

