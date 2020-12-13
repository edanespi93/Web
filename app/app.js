import { Header } from "./components/Header.js";
import { Main } from "/app/components/Main.js";
import { Router } from "/app/components/Router.js";
import { hamburguesa } from "/app/helpers/hamburguesa.js";

export function App() {
    const d = document,
        $root = d.getElementById("root");
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    Router();

}