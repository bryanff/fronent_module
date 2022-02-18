"use strict";

import "./css/styles.css";
import { Storage } from "./js/service/storage.js";
import "./js/signUp";
import "./js/signIn";

const body = document.querySelector("body");
const modeToggle = document.querySelector(".nav__dark-mode");
const sidebarOpen = document.querySelector(".sidebar__open-sidebar");
const sidebarClose = document.querySelector(".sidebar__close-sidebar");
const sidebar = document.querySelector(".sidebar");

modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("nav__dark-mode--active");
  body.classList.toggle("body-dark");
  Storage.set("dark-mode", {
    isActive: !Storage.get("dark-mode").isActive
      ? true
      : !Storage.get("dark-mode").isActive,
    isEnabled: !Storage.get("dark-mode").isEnabled
      ? true
      : !Storage.get("dark-mode").isEnabled,
  });
});

sidebarOpen.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--active");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--active");
});

if (module.hot) {
  module.hot.accept();
}
