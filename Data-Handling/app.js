let container = document.getElementById("educational-container");
document.getElementById("add").addEventListener("click", () => {
    container.innerHTML += `<div>Name of Course: <input type="text" name="course" id="course"> &nbsp;
    Name of Board: <input type="text" name="board" id="board"> &nbsp;
    Passing Year: <input type="text" name="year" id="year"> &nbsp;
    Percentage: <input type="text" name="percentage" id="percentage"> <div> &nbsp;
    `
})