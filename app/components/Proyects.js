export function Proyects() {
    const $seccion = document.createElement("seccion");
    $seccion.classList.add("conocimientos");
    $seccion.innerHTML = `
      <h2>Proyectos</h2>
              <section class="grid-fluid section">
                    <div>
                        <figure>
                            <img class="imagen" src="app/assets/music-696x514.jpg" alt="">
                            <figcaption>
                                🎵 Api Rest Music-Artist
                            </figcaption>
                        </figure>

                    </div>
                    <div>
                        <figure>
                        <a href="https://www.facebook.com/andres.escobar1993" target="_blank" rel="noopenner">
                            <img class="imagen" src="app/assets/descarga.png" alt="">
                            <figcaption>
                                📺 Api Rest Tv-Shows
                            </figcaption>
                        </figure>
                        </a>
                    </div>
                    <div>
                        <figure>
                            <img class="imagen" src="app/assets/pok.png" alt="">
                            <figcaption>
                                🌐 Api Rest Pokemons
                            </figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <img class="imagen" src="app/assets/wp.png" alt="">
                            <figcaption>
                                🌐 Api WordPress
                            </figcaption>
                        </figure>
                    </div>
            </section>
    `;


    return $seccion;

}