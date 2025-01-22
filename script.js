function openNav() {
    var n = document.getElementById("navigation");
    if (n.style.width === "75vw") {
      n.style.width = "0";
    } else {
      n.style.width = "75vw";
    }
}
function closeNav() {
    var n = document.getElementById("navigation");
    if (n.style.width === "0") {
        n.style.width = "75vw";
    } else {
        n.style.width = "0";
    }
}