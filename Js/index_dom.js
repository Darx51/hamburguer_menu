import hamburgerMenu from "./menu_hamburger.js";
import {clock,alarm} from "./reloj_alarma.js";    //Ojo si se importan varias funciones, se utiliza destructuracion y no se exportan funciones por default
import { shortcuts, moveBall } from "./keyboard.js";
import { CuentaReg } from "./count_down.js";
import {btnscroll}  from "./btn_scroll.js";     //como solo es una funcion por default, puede ir o no con {}
import dark_theme from "./tema_oscuro.js";
import responsiveMedia from "./object_responsive.js";
import responsive_tester from "./width_height_responsive_test.js";
import userDevice from "./device_detection.js";
import network_detection from "./network_detection.js";
import stremVideo from "./webcam_detection.js";
import geolocation from "./geolocation_position.js";
import buscarCartas from "./buscar_cards.js";
import loteria from "./lottery.js";
import carrusel from "./slider.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./form_validations.js";
import dragAnddrop from "./drag_drop.js";
import qrGenerator from "./qr_code_generator.js";
import speachReader from "./speachReader.js";


const d=document;
d.addEventListener("DOMContentLoaded", e=>{           //Primero se carga el documento
  hamburgerMenu("#panel-btn","#panel",".menu a");   //despues ahora si mando llamar la funcion y le paso los parametros

  //Ejercicio 1 Reloj
  clock("#iniciarReloj","#detenerReloj","#mostrarReloj");
  alarm("#iniciarAlarma", "#detenerAlarma", "../assets/pianoManAlarm.mp3");

  //Exercise 3
  CuentaReg("muestraCuentaReg","Dec 04, 2022 12:00:00","Termino la cuenta regresiva");     //se pone '#' solo cuando se usa querySelector, 
                                //pero en este caso como usaremos directamente getElementById 'id' en la funcion podemos pasarlo sin #
  //Exercise 4 
  btnscroll("#btnScroll");

  //Exercise 5
  responsiveMedia("youtube","(min-width:1024px)",`https://www.youtube.com/watch?v=2SetvwBV-SU&t=14s`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>`);   //se debe mandar llamar por cada componente al que se le va aplicar responsive
  responsiveMedia("gmaps","(min-width:1024px)",`https://goo.gl/maps/YDu8dSKjzSf5axG56`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20California!5e0!3m2!1ses-419!2sus!4v1649461303654!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);     //se debe mandar llamar por cada componente al que se le va aplicar responsive

  //Exercise 6
  responsive_tester("responsive-tester");

  //Exercise 7
  userDevice("user-device");

  //Exercise 8
  network_detection();

  //Exercise 9
  stremVideo("video");

  //Exercise 10
  geolocation("cords");

  //Exercise 11
  buscarCartas(".buscarCartas",".card");

  //Exercise 12
  loteria("#btnGanador",".lengProg");

  //Slider
  carrusel();

  //scroll Spy
  scrollSpy();

  //smart Video
  smartVideo();

  // Form Validations
  contactFormValidations();

  //Drag and Drop
  dragAnddrop(".lista");

  //QR Generator
  qrGenerator("contenedorQR","link","formulario");

  
});



                //Exercise 2                    En este caso no se hace delegacion de eventos porque aqui el evento debe asignarse directamente del document o 'nodo raiz'
/*
d.addEventListener("keyup", e =>{
  shortcuts(e);
})
d.addEventListener("keypress", e =>{
  shortcuts(e);
})
*/
d.addEventListener("keydown", e =>{             //KeyDown es otro evento que debe estar aparte para que este mejor organizado
  shortcuts(e);
  moveBall(e, "#ball", "#stage");
})


//Speach Reader
speachReader();

//Exercise 5 
dark_theme("#btnDark","dark-mode","#stage","stageColor");          //como la clase 'dark-mode y 'stageColor' las pondremos y quitaremos
// no necesitamos agregarle el . punto de una clase o # de un id


