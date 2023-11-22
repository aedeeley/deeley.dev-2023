var tooltip = document.querySelectorAll(".tooltip span");
document.addEventListener("mousemove", fn, false);
function fn(e) {
  for (var i = tooltip.length; i--; ) {
    tooltip[i].style.left = e.pageX + "px";
    tooltip[i].style.top = e.pageY + "px";
  }
}
const btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  x = document.getElementById("toggler");
  if (x.innerHTML === "Dark") {
    x.innerHTML = "Light";
  } else {
    x.innerHTML = "Dark";
  }
});