
export default function scrollSpy(){
  const $sections = document.querySelectorAll("section[data-scroll-spy]");    /* trae todos los que tengan el data atribute 'data-scroll-spy' */
  
  const cb=(entries)=>{                                 //muestra todas las entries, las entries son los eventos que se generan automaticamente            
    //console.log(entries);                               //mostramos el evento que se ejecuta con la API IntersectionObserver
  
    entries.forEach((entry)=>{
      const id = entry.target.getAttribute("id");       //entry individual, captura el 'id' de cada seccion
      //console.log(id);      
      if(entry.isIntersecting){  
        try {
          //si un elemento o seccion ya se visualizo me devolvera 'true' 
        document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");      //me traera un enlace 'a' que tenga el atributo [data-scroll-spy]
          // y que en su atributo href tenga un el id con el valor '#seccion(n)' ya que es el mismo Id
          // de las secciones y los enlaces y le agregara la clase 'active' mientras se visualice en pantalla
        } catch (error) {         // agregue el try catch para controlar esos errores en el console log
         // console.log(`no hos preocupeis, no es un error grave al quitar agregar la clase active` );
        }  
      }                                      
      else{     
        try {  // agregue el try catch para controlar esos errores en el console log
          document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active"); //caso contrario remueve la clase 'active'
        } catch (error) {
            //console.log(`no hos preocupeis, no es un error grave al quitar la clase active`);        
        }
        // 
      }
    })
  };

  const observer = new IntersectionObserver(cb, {
   // root      //en este caso como no le especificamos otro selector el root es el documento
    //rootMargin:"-300px"             //sera necesario que la nueva seccion entrante tenga mas de 250px dentro de la pantalla
    threshold:[0.5, 0.75],      //cuando el elemento tenga del 50% al 75% de su contenido visible en el vieport 'pantalla'
  });
  //console.log("observer",observer); //propiedades del observer
  $sections.forEach((el) => observer.observe(el));        //para cada elemento O SECCION EN ESTE CASO observa ese mismo elemento cuando este en pantalla
}