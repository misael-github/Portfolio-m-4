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
        <input type="text" id="nombre" name="name" class="input-nombre"> 
      </div>
      <div class="field">
        <label for="email"  class="label">Email</label>
        <input type="text" id="email" name="email"  class="input-email">
      </div>
      <div class="field">
        <label for="message"  class="label">Mensaje</label>
        <textarea name="message" id="message" class="textarea"></textarea>
      </div>
      <div class="btn">
        <button type="submit" class="button">Enviar</button>
      </div>
    </form>
    </div>
`
el.appendChild(containerForm)

}
function submitForm() {
  const formEl = document.querySelector(".form");
  // const messageEl = document.querySelector(".form__message");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "dmisael2000@gmail.com",
        message: `
        Recibiste un mensaje de: ${value.name}.Mail: ${value.email}. Mensaje: ${value.message}`,
      }),
      
    });
    // messageEl.style.display = "inherit";
    // messageEl.style.color = "lime";
    formEl.reset();
  });
}
