/*Danielo27 Surveillance Calendar v0.1.1*/

function calendar() {
    for (var m = firstMonth; m < newMonts.length; m++) {
        createTable(newMonts[m]["name"]);
        var elemento = document.querySelector(".name_days_" + newMonts[m]["name"]);
        var month = document.querySelector(".month_" + newMonts[m]["name"]);

        month.textContent = newMonts[m]["name"];
        for (var i = 0; i < name_days.length; i++) {
            var response = document.createElement("td");
            elemento.appendChild(response);
            response.textContent = name_days[countDays()];
        }
        var days = document.querySelector(".number_days_" + newMonts[m]["name"]);
        var count = 8;

        for (var i = 0; i < newMonts[m]["days"]; i++) {
            if (nturns[0] > 2) {
                nturns[0] = 1;
                nturns[1] = nturns[1] + 1;
            }

            if (nturns[1] > (turns.length - 1)) {
                nturns[1] = 0;
            }

            if (count > 7) {
                var tr = document.createElement("tr");
                days.appendChild(tr);
                count = 1;
            }
            firstDay = verificationDay(firstDay);
            var td = document.createElement("td")
            td.classList.add(name_days[count - 1], turns[nturns[1]], "calendar__columns");
            tr.appendChild(td);
            td.textContent = i + 1;
            count++;
            nturns[0] = nturns[0] + 1;
        }
    }
};