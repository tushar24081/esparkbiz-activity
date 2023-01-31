const tableContainer = document.getElementById("table-container")
var tusharRows = 3;
var tusharCols = 3;
var tusharOpacityCounter = 0.3
tusharResponsibleTimer();
function tusharResponsibleTimer() {
    var tusharTargetDate = new Date().getTime() + (1 * 60 * 1000);
    intervalX = setInterval(function () {
        var tusharNow = new Date().getTime();
        var tusharDistance = tusharTargetDate - tusharNow;

        if (tusharDistance < 0) {
            clearInterval(intervalX)
            tusharResponsibleTimer();
            tusharDrawCounter += 1;
            tusharGameOver = true;
            checkIsOver();
            refershWinner();
        }
        var tusharMinutes = Math.floor((tusharDistance % (1000 * 60 * 60)) / (1000 * 60));
        var tusharSeconds = Math.floor((tusharDistance % (1000 * 60)) / (1000));
        timer.innerHTML = `Timer: ${tusharMinutes} : ${tusharSeconds}`;


    }, 1000);
}
generatingTable(tusharRows, tusharCols)

function generatingTable(tusharRows, tusharCols) {
    if(tusharCols > 10 && tusharRows > 10){
        alert("Game Over")
        window.location.reload();
        return;
    }
    var Tushartable = document.createElement("table");
    for (let i = 0; i < tusharRows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < tusharCols; j++) {
            td = document.createElement("td");
            tr.appendChild(td);
        }
        Tushartable.appendChild(tr);
    }

    document.getElementById("table-container").appendChild(Tushartable)

    var tusharTds = document.querySelectorAll("td");
    var tusharRandomNumber = Math.floor(Math.random() * tusharTds.length);
    var tusharR = Math.floor(Math.random() * 255);
    var tusharG = Math.floor(Math.random() * 255);
    var tusharB = Math.floor(Math.random() * 255);
    tusharTds.forEach((td) => {
        td.style.background = `rgba(${tusharR}, ${tusharG}, ${tusharB})`
    })
    tusharTds[tusharRandomNumber].style.background = `rgba(${tusharR}, ${tusharG}, ${tusharB}, ${tusharOpacityCounter})`;
    tusharTds[tusharRandomNumber].addEventListener("click", () => {
        Tushartable.remove();
        tusharOpacityCounter += 0.1
        console.log(tusharOpacityCounter);
        generatingTable(++tusharRows, ++tusharCols)
    })

    
}


