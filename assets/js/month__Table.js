/*Danielo27 Surveillance Calendar v0.1.1*/

function createTable(request) {
    var container = document.querySelector(".calendar");

    var main = document.createElement("main");
    main.classList.add("calendar__month");
    container.appendChild(main);

    var h2 = document.createElement("h2");
    h2.classList.add("month_" + request);
    main.appendChild(h2);

    var table = document.createElement("table");
    table.classList.add("week_month");
    main.appendChild(table);

    var tr = document.createElement("tr");
    tr.classList.add("name_days_" + request);
    table.appendChild(tr);

    var tbody = document.createElement("tbody");
    tbody.classList.add("number_days_" + request);
    table.appendChild(tbody);
}