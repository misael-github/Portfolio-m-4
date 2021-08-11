function viewFooter(el) {
    const footer = document.createElement("div")
    footer.innerHTML= ` <footer class="footer">
    <h2 class="footer__title">Misael</h2>
    <a href="https://www.instagram.com/misa.mizrahi/ " class="footer__links">Instagram <i class="fab fa-instagram"></i></a>
    <a href="https://www.linkedin.com/in/misael-mizrahi-5a4b461b8/" class="footer__links">Linkedin <i class="fab fa-linkedin-in"></i></a>
    <a href="https://github.com/misael-github" class="footer__links">Github <i class="fab fa-github"></i></a>
  </footer>`
  el.appendChild(footer)
}