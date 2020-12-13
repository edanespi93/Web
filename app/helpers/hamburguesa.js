export function hamburguesa() {
    const d = document;
    d.addEventListener("click", e => {
        if (e.target.matches(".menu-btn i")) d.querySelector("ul").classList.toggle('is-active');
    })
}