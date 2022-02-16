import { Storage  } from './service/storage.js';

const body = document.querySelector("body");

const modeToggle = document.querySelector(".nav__dark-mode");
const searchToggle = document.querySelector(".nav__mode-search");
const sidebarOpen = document.querySelector(".sidebar__open-sidebar");
const sidebarClose = document.querySelector(".sidebar__close-sidebar");
const sidebar = document.querySelector(".sidebar");

let darkMode = Storage.get("dark-mode");

if(darkMode && darkMode.isActive && darkMode.isEnabled) {
    body.classList.add("body-dark");
}

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("nav__dark-mode--active");
    body.classList.toggle("body-dark");
    Storage.set("dark-mode",{ 
        isActive:  !Storage.get("dark-mode").isActive? true : !Storage.get("dark-mode").isActive,
        isEnabled: !Storage.get("dark-mode").isEnabled? true : !Storage.get("dark-mode").isEnabled
    });
})

sidebarOpen.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--active");
});

sidebarClose.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--active");
    
});
