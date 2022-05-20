

export default function dragAnddrop(lista){
  const $lista = document.querySelector(lista);
  
  Sortable.create($lista, {                                  // Para trabajar con la libreria 'Sortable 'recibe 2 argumentos, dentro del metodo create 
                                                            // 1ro la lista que contiene los elementos y 2do, un objeto conteniendo las opciones o atributos que queremos que tenga  

    animation: 150,
    chosenClass: "claseSeleccionado",
    //ghostClass: "fantasma"
    dragClass:"drag",
    onEnd: ()=>{                                             //esta funcion se ejecuta al soltar el elemento arrastrado, como si fuera un trigered
      
    },
    group:"listaPersonas",                                    // crearemos una lista o grupo llamado 'listaPersonas'
    
    store:{                                                   //store es una propiedad que recibe un objeto, y ese objeto va contener un metodo como el onEnd
           //Guardamos el orden de la lista                     //que se disparara al hacer X accion
      set: (sortable)=>{                                             

        const orden = sortable.toArray();              // el metodo toArray 'no es de  Javascript' pero convierte los elementos a una lista o Array
                                                      //y guardara el orden de los elementos en la variable orden 
        
        
                           //como 1er argumento, accedemos al nombre de la lista grupo, demodo que 'listaPersonas' se llamara nuestra variable
        localStorage.setItem(sortable.options.group.name, orden.join(','));     //como en localStorage solo acepta 'cadenas de texto' convierto a cadena de texto
        //console.log(orden);                                                     //con .join() y separo los elementos por , y almaceno en la variable 'listaPersonas'
      },

      //Obtenemos el orden de la lista para que al actualizar la pagina las imagenes se queden tambien  y lo obtenemos de donde lo guardamos     
      get:(sortable)=>{
        const orden2 = localStorage.getItem(sortable.options.group.name);            //como en localStorage guardamos el orden, 
                                                                      //accedemos a localSotrage y le indicamos cual es el 
                                                                      // Item que queremos obtener, en este caso es el nombre del grupo: listaPersonas, que usamos como variable
        //console.log(orden2);

        return orden2                                                    // me retorna orden2 
        ? orden2.split(',')                                              // si hay elementos en orden2, lo convierte de nuevo ahora a Array con split
                                                                          // ya que la libreria de 'Sortable' trabaja con Arrays
        :[];                                                             // y si no existe, creamos un Array vacio

      }
    }
  });         
  }