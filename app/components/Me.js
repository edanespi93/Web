export function Me() {

    const $me = document.createElement("section");
    $me.classList.add("acerca");
    $me.innerHTML = `
      <h2>Sobre mí</h2>
                <p>Hola, mi nombre es Edwin Andrés Escobar Pinargote tengo 27 años vivo en Ecuador-Manabí-Portoviejo, soy programador Frontend Jr. y a nivel de Backend poseo conocientos basicos.
                </p>
        <h2>Conocimientos</h2>
    `;

    return $me;
}