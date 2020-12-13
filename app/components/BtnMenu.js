export function BtnMenu() {
    const $div = document.createElement("div");
    $div.classList.add("menu-btn");
    $div.innerHTML = `
      <i class="fas fa-bars"></i>
    `;

    return $div;
}