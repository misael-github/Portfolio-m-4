function viewFooter(el) {
    const footer = document.createElement("div")
    footer.innerHTML= ` <footer class="footer">
    <h2 class="footer__title">Misael</h2>
    <div class="container-links">
    <a href="https://www.instagram.com/misa.mizrahi/ " class="footer__links" target="_blank"> <i class="fab fa-instagram footer__links--icons"></i>Instagram</a>
    <a href="https://www.linkedin.com/in/misael-mizrahi-5a4b461b8/" class="footer__links" target="_blank"><i class="fab fa-linkedin-in footer__links--icons"></i>Linkedin</a>
    <a href="https://github.com/misael-github" class="footer__links" target="_blank"> <i class="fab fa-github footer__links--icons"></i>Github</a>
    <div>
  </footer>`
  el.appendChild(footer)
}