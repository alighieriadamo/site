// HEADER
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header-placeholder").innerHTML = data;
        });
});

// FOOTER
document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});

// CONTATO
document.addEventListener("DOMContentLoaded", function () {
    fetch("contato.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("contato-placeholder").innerHTML = data;
        });
});