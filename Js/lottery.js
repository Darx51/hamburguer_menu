

export default function loteria(btn, lenp){
  
  const getWiner =()=>{
    const $players = document.querySelectorAll(lenp);
    const random = Math.floor(Math.random()*$players.length);       //random me da un valor de 0 a 1 y ese lo multiplicamos
                                                                      // por el numero total de elementos
                                                 //con floor nos aseguramos que se redondee hacia la posicion de abajo de 2.8 =2 por ejemplo                     
    const winner = $players[random];             //ya que tomara las posiciones del 0 al 9 y ganador = ganador en la posicion [random]
    //console.log(random);                        

    return `el ganador es ${winner.textContent}`              // ganador = el texto contenido en el elemento con la posicion 'n'
  }

  document.addEventListener("click", e=>{
    if(e.target.matches(btn)){
      let result = getWiner();
      alert(result);
      //console.log(result);
    }
  }
  )
}






  /* SORTEO CON USUARIOS 'lenp' DE YOUTUBE    ytd-comment-thread-renderer #author-text span */
/*  const getWiner2 = (lenp) => {
    const $players = document.querySelectorAll(lenp);
    const random = Math.floor(Math.random()*$players.length);                                                                       
    const winner = $players[random];             
    return `el ganador es ${winner.textContent}`;             
  };
  getWiner2("ytd-comment-thread-renderer #author-text span");
*/

