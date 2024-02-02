const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function formulario(){
  $(document).ready(function()
  {
    $("#enviar").click(function()
    {
      alert("Tu solicitud ha sido enviada :)")
    })
  })
}

