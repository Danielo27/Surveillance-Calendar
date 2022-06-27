/*Danielo27 Surveillance Calendar v0.1.1*/

window.addEventListener("load", function() {
    document.querySelector("#title").innerHTML = "<span>&#9874;</span>Calendario Trabajo " + getYear();
    document.querySelector("#copy").innerHTML = "Diseñado por Daniel Quintero Henriquez<br><small><span>&#9819;</span>Surveillance Calendar v0.1.1<br><span>&#169;</span>Copyrigth Daniel Quintero " + getYear() + "</small >"
});