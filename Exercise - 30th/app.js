const tableContainer = document.getElementById("table-container")
var tusharRows = 3;
var tusharCols = 3;
generatingTable(tusharRows, tusharCols)

function generatingTable(tusharRows, tusharCols) {
    if(tusharCols > 10 && tusharRows > 10){
        alert("Game Over")
        return;
    }
    var table = document.createElement("table");
    for (let i = 0; i < tusharRows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < tusharCols; j++) {
            td = document.createElement("td");
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    document.getElementById("table-container").appendChild(table)

    var tusharTds = document.querySelectorAll("td");
    var tusharRandomNumber = Math.floor(Math.random() * tusharTds.length);
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    tusharTds.forEach((td) => {
        td.style.background = `rgba(${r}, ${g}, ${b})`
    })
    tusharTds[tusharRandomNumber].style.background = `rgba(${r}, ${g}, ${b}, 0.5)`;
    tusharTds[tusharRandomNumber].addEventListener("click", () => {
        table.remove();
        generatingTable(++tusharRows, ++tusharCols)
    })

    
}


