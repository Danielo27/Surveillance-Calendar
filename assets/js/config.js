/*Danielo27 Surveillance Calendar v0.1.1*/

var turns = ["day__turn", "affternoon__turn", "night__turn", "sleep__turn"];

var name_days = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

var newMonts = [
    { "name": "Enero", "days": 31 },
    { "name": "Febrero", "days": 28 },
    { "name": "Marzo", "days": 31 },
    { "name": "abril", "days": 30 },
    { "name": "mayo", "days": 31 },
    { "name": "junio", "days": 30 },
    { "name": "julio", "days": 31 },
    { "name": "agosto", "days": 31 },
    { "name": "septiembre", "days": 30 },
    { "name": "octubre", "days": 31 },
    { "name": "noviembre", "days": 30 },
    { "name": "diciembre", "days": 31 },
];

var firstDay = 0;
var firstMonth = 0;
var nturns = [0, 0];