export function Home() {
    const $seccion = document.createElement("section");
    $seccion.classList.add("home");
    $seccion.innerHTML = `
    <figure class="figure">
                    <img src="app/assets/ae.png" alt="Andrés Escobar">
                    <figcaption>Ing. Andrés Escobar</figcaption>
    </figure>
  `
    return $seccion;
}