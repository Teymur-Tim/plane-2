window.addEventListener("offline", function () {
  const navbarStatus = document.getElementById("navbar-status");
  navbarStatus.innerHTML = "Ты не в сети";
  navbarStatus.style.color = "red";
});
window.addEventListener("online", function () {
  const navbarStatus = document.getElementById("navbar-status");
  navbarStatus.innerHTML = "";
  navbarStatus.style.color = "";
});
