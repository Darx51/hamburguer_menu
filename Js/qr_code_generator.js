

export default function qrGenerator(id, link, idForm){
  const $containerQr=document.getElementById(id);
  const $form=document.getElementById(idForm);
  const QR=new QRCode($containerQr);



  $form.addEventListener('submit', (e)=>{           //al hacer click en el boton
    e.preventDefault();
                                              //Se nos generara automaticamente el codigo QR del contenido del input
    QR.makeCode($form.link.value);                //necesitamos el contenido del input, por eso usamos value, (no el id del input)

  })

}