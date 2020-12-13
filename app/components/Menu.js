export function Menu() {
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
    <img src="./app/assets/pc.svg" alt="" class="">
     
    <ul>
      <li><a href="#/">Inicio</a></li>
      <li><a href="#/me">Sobre mí</a></li>
      <li><a href="#/proyects">Proyectos</a></li>
      <li><a href="#/contact">Contacto</a></li>
    </ul>
    `;
    return $menu;

}