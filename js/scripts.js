// HEADER PÁGINAS
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header-placeholder").innerHTML = data;
        });
});

// FOOTER PÁGINAS
document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});