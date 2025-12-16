const toggle = document.getElementById("theme-toggle");

// First visit: respect system theme
if (!localStorage.getItem("theme")) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
  }
}

// Load saved preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "☀️ Light mode";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️ Light mode";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙 Dark mode";
  }
});
