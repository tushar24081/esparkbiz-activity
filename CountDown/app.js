function countdownStart(){
    var countdownDate = new Date("Aug 24, 2023 12:00:00").getTime();
    console.log(countdownDate); //this method returns the millisecons remained since that date.

    var iteratingInterval = setInterval(() => {
        var now = new Date().getTime(); //shows the current time
        var difference = countdownDate - now; // difference between the date we want and the current

    }, 1000)
}