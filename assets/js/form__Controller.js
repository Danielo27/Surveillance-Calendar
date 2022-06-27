/*Danielo27 Surveillance Calendar v0.1.1*/

var button = document.querySelector("#form__load");

button.addEventListener('click', function() {
    var calendario = document.querySelector(".calendar");
    while (calendario.firstChild) {
        calendario.removeChild(calendario.firstChild);
    }
    var year = getYear();
    firstMonth = int(valueElement("#first__month"));
    firstDay = new Date(year, firstMonth, 1).getDay();

    var numTurn = int(valueElement("#num__turn"));
    var typeTurn = int(valueElement("#type__turn"));

    nturns = [numTurn, typeTurn];
    calendar();
})

function int(request) {
    var response = parseInt(request);
    return response;
}

function valueElement(request) {
    var response = document.querySelector(request).value;
    return response;
}

function getYear() {
    var response = new Date();
    response = response.getFullYear();
    return response;
}