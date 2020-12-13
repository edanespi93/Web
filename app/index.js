import { App } from '/app/App.js';
import { hamburguesa } from '/app/helpers/hamburguesa.js';

document.addEventListener("DOMContentLoaded", () => {
    App();
});
window.addEventListener("hashchange", () => {
    App();

})

document.addEventListener("click", hamburguesa());