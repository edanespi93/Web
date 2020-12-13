import { BtnMenu } from "./BtnMenu.js";
import { Menu } from "./Menu.js";

export function Header() {
    const $header = document.createElement("header");
    $header.classList.add("header");
    $header.appendChild(Menu());
    $header.appendChild(BtnMenu());
    return $header;
}