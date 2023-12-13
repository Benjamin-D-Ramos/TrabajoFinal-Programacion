function OpenNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function CloseNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_3kzw5pb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Muchas gracias por el contacto');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});