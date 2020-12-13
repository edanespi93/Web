export function Knowledge() {
    const $knowledge = document.createElement("section");
    $knowledge.classList.add("grid-fluid");
    $knowledge.innerHTML = `
                      <div>
                        <figure>
                            <img class="imagen" src="app/assets/1.jpg" alt="">
                            <figcaption>
                                ✔️ Html5
                                <br> ✔️ Css(FlexBox-Css-Grid)
                                <br> ✔️ JavaScript (Es6-Ajax-Fetch-Api)
                                <br> ✔️ React JS (Básico)
                                <br> ✔️ SPA (Vanilla Js)
                            </figcaption>
                        </figure>

                    </div>
                    <div>
                        <figure>
                            <img src="app/assets/b2.png" alt="">
                            <figcaption>
                                ✔️ Node.Js(Básico)
                                <br> ✔️ Mongo DB(Básico)
                                <br> ✔️ Php(Básico)
                                <br> ✔️ Mysql(Básico)
                            </figcaption>
                        </figure>

                    </div>
                    <div>
                        <figure>
                            <img src="app/assets/b3.png " alt=" ">
                            <figcaption>
                                ✔️ Prototipos Apps
                            </figcaption>
                        </figure>
                    </div>
  `;

    return $knowledge;

}