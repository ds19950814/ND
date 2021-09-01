function addRow() {
   "use strict";

    var table = document.getElementById("table");
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = document.getElementById("Vardas").value;
    td2.innerHTML  = document.getElementById("Pavardė").value;
    td3.innerHTML  = document.getElementById("Amžius").value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    table.children[0].appendChild(row);

    if td3 <= 0,
      alert("įveskite duomenis")


}
