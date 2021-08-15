function viewContact(el){
    const containerForm = document.createElement("div")
    containerForm.innerHTML = `
    <div class= "container-title">
    <p class="section-contact__title">Contactame</p>
    </div>
    <div class= "container-form">
    <form action="" method="post"  class="form">
     
      <div class="field">
        <label for="nombre" class="label">Nombre</label>
        <input type="text" id="nombre" name="nombre" class="input-nombre"> 
      </div>
      <div class="field">
        <label for="email"  class="label">Email</label>
        <input type="text" id="email" name="email"  class="input-email">
      </div>
      <div class="field">
        <label for="mensaje"  class="label">Mensaje</label>
        <textarea name="mensaje" id="mensaje" class="textarea"></textarea>
      </div>
      <div class="btn">
        <button type="submit" class="button">Enviar</button>
      </div>
    </form>
    </div>
`
el.appendChild(containerForm)
}
