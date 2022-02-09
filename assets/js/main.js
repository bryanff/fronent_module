const body = document.querySelector("body");

const modeToggle = document.querySelector(".nav__dark-mode");
const searchToggle = document.querySelector(".nav__mode-search");
const sidebarOpen = document.querySelector(".sidebar__open-sidebar");
const sidebarClose = document.querySelector(".sidebar__close-sidebar");
const sidebar = document.querySelector(".sidebar");

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("nav__dark-mode--active");
    body.classList.toggle("body-dark");
})

sidebarOpen.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--active");
});

sidebarClose.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--active");
});
