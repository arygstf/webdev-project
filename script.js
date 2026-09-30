(function () {
  try {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark-mode");
    }
  } catch (e) {}
})();


function darkMode() {
  const isDark = document.documentElement.classList.toggle("dark-mode");
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch (e) {}
}