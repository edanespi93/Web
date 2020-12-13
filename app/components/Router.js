import { Home } from "./Home.js";
import { Social } from "./Social.js";
import { Me } from "./Me.js";
import { Knowledge } from "./Knowledge.js";
import { Proyects } from "./Proyects.js";
import { ContactForm } from "./ContactForm.js";

export function Router() {
    const d = document,
        $main = d.getElementById("main"),
        w = window;
    let { hash } = location;
    console.log(hash);
    $main.innerHTML = null;

    if (!hash || hash === "#/") {
        $main.appendChild(Home());
        $main.appendChild(Social());
    } else if (hash === "#/me") {
        $main.appendChild(Me());
        $main.appendChild(Knowledge());
    } else if (hash === "#/proyects") {
        $main.appendChild(Proyects());
    } else if (hash === "#/contact") {
        $main.appendChild(ContactForm());
    }
}