export function Social() {

    const $social = document.createElement("section");
    $social.classList.add("social");

    $social.innerHTML = `
    <div class="links">
      <a href="https://www.facebook.com/andres.escobar1993" target="_blank" rel="noopenner">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/Andres93Escobar" target="_blank" rel="noopenner">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/andr%C3%A9s-escobar-0a52b91b5/"  target="_blank" rel="noopenner">
                    <i class="fab fa-linkedin"></i>
                </a>
    <div>
    `;

    return $social;

}