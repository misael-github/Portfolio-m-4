function header (el){
const headerEl = document.createElement("div")
headerEl.innerHTML = `  <header class="header">
<nav class="nav">
  <input type="checkbox" name="" id="check" />
  <label for="" class="logo">Misael</label>
  <ul class="list">
    <li class="list__items">
      <a href="../../index/index.html" class="list__items--links">Home</a>
    </li>
    <li class="list__items">
      <a href="../portfolio/portfolio.html" class="list__items--links">Portfolio</a>
    </li>
    <li class="list__items">
      <a href="../../servicios/servicios.html" class="list__items--links">Servicios</a>
    </li>
    <li class="list__items">
      <a href="../componentes/contacto/contact.html" class="list__items--links">Contacto</a>
    </li>
  </ul>
  <label for="check" class="checkbtn-icon"><i class="fas fa-bars icono-hamburguesa"></i><i class="fas fa-times icono-x"></i> </label>
</nav>
</header>`
/*  <i class="fas fa-server">*/

el.appendChild(headerEl)

}
function viewIcons(){
    const iconoHamburguesa = document.querySelector(".icono-hamburguesa")
    const iconoX = document.querySelector(".icono-x")
    const inputCheck = document.querySelector("#check")

    inputCheck.addEventListener("click", () => {
      iconoX.style.display = "flex"
      iconoHamburguesa.style.display = "none"
     
    })

    inputCheck.addEventListener("click", () => {
      iconoX.style.display = "init"
      // iconoHamburguesa.style.display = "init"
    })

  }
  
   
    

