// Theme toggle: flips light/dark and remembers the choice.
// The initial theme is set inline in baseof.html before first paint.
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("theme-toggle");
  if (!button) return;
  button.addEventListener("click", function () {
    var root = document.documentElement;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
});
