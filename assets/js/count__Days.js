/*Danielo27 Surveillance Calendar v0.1.1*/

function countDays() {
    var response = firstDay;
    firstDay = firstDay + 1;
    if (firstDay > 6) {
        firstDay = 0;
    }
    return response;
}