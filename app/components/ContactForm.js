export function ContactForm() {
    const d = document,
        $form = d.createElement("form"),
        $style = d.getElementById("dynamic-styles");
    $form.classList.add("contact-form");
    $style.innerHTML = `
    .contact-form{
    --form-ok-color:#4caf50;
    --form-error-color:#f44336;
    margin-left: auto;
    margin-right: auto;
      width: 70%;
      background: whitesmoke;
      
}
.contact-form > *{
    padding: 0.5rem;
    margin: 1rem auto;
    display: block;
    width: 100%;
    border-radius:0.4rem;
}
.contact-form textarea{
    resize: none;
}
.contact-form legend,
.contact-form-response{
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
}
.contact-form input,
.contact-form textarea{
    font-size: 1rem;
    font-family: sans-serif;
}
.contact-form input[type="submit"]{
    width: 50%;
    font-weight: bold;
    cursor: pointer;
}
.contact-form *::placeholder{
    color: #000;
}

.contact-form [required]:valid{
    border: thin solid var(--form-ok-color);
}

.contact-form [required]:invalid{
    border: thin solid var(--form-error-color);
}
.contact-form-error{
    margin-top: -1rem;
    font-size: 80%;
    background-color:var(--form-error-color);
    color: #fff;
    transition: all 800ms ease;
}
.contact-form-error.is-active{
    display: block;
    animation: show-message 1s 1 normal 0s ease-out both;
}
.none{
    display: none;
}
@keyframes show-message {
    0%{
        visibility: hidden;
        opacity: 0;
    }
    100%{
        visibility: visible;
        opacity: 1;
    }
    
}


    `;
    $form.innerHTML = `
    <legend>Envíanos tus comentarios</legend>
              <input type="text" name="name" placeholder="Escribe tu nombre" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
              <input type="email" name="email" placeholder="Escribe tu email" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
              <input type="text" name="subject" placeholder="Asunto a tratar" pattern="^[A-Z0-9a-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
              <textarea name="comments" rows="5" placeholder="Escribe tus comentarios" data-pattern="^.{1,255}$" required></textarea>
              <input type="submit" value="Enviar">
              <div class="contact-form-loader none">
                <img src="app/assets/oval.svg" alt="Cargando">
              </div>
              <div class="contact-form-response none">
                <p>Los datos han sido enviados</p>
              </div>
  `;




    function contactFormValidation() {
        const $inputs = d.querySelectorAll(".contact-form [required]"),
            $form = d.querySelector(".contact-form");

        const validateText = (name) => {
            if (name === "name") return "El nombre tiene caracteres invalidos";
            else if (name === "email") return "El correo no es valido ";
            else if (name === "subject") return "El asunto no es valido ";
            else if (name === "comments") return "Caracteres permitidos max:255";
        };

        $inputs.forEach((input) => {
            const $span = d.createElement("span");
            $span.id = input.name;
            $span.textContent = `${validateText(input.name)}`;
            $span.classList.add("contact-form-error", "none");
            input.insertAdjacentElement("afterend", $span);
        });

        d.addEventListener("keyup", (e) => {
            if (e.target.matches(".contact-form [required]")) {
                let $input = e.target,
                    pattern = $input.pattern || $input.dataset.pattern;
                if (pattern && $input.value !== "") {
                    let regex = new RegExp(pattern);
                    return !regex.exec($input.value) ?
                        d.getElementById($input.name).classList.add("is-active") :
                        d.getElementById($input.name).classList.remove("is-active");
                }
                if (!pattern) {
                    return $input.value === "" ?
                        d.getElementById($input.name).classList.add("is-active") :
                        d.getElementById($input.name).classList.remove("is-active");
                }
                if ($input.value === "")
                    d.getElementById($input.name).classList.remove("is-active");
            }
        });

        d.addEventListener("submit", (e) => {
            if (e.target.matches(".contact-form")) {
                e.preventDefault();
                alert("Enviando formulario");
                const $loader = d.querySelector(".contact-form-loader"),
                    $response = d.querySelector(".contact-form-response");
                $loader.classList.remove("none");
                fetch("https://formsubmit.co/ajax/eescobar055@gmail.com", {
                        method: "POST",
                        body: new FormData(e.target)
                    })
                    .then(res => res.ok ? res.json() : Promise.reject(res))
                    .then(json => {
                        $loader.classList.add("none");
                        $response.classList.remove("none");
                        $response.innerHTML = `<p>${json.message}</p>`;
                        $form.reset();
                    })
                    .catch(err => {
                        console.error(err);
                        let message = err.statusText || "Ocurrio un error,  intente nuevamente";
                        $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`
                    })
                    .finally(() => setTimeout(() => {
                        $response.classList.add("none");
                        $response.innerHTML = "";
                    }, 4000));
            }
        });
    }
    setTimeout(() => {
        contactFormValidation();
    }, 100);

    return $form;
}