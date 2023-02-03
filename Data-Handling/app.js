let container = document.getElementById("educational-container");
let expr_container = document.getElementById("experience-container");
let lang_container = document.getElementById("lang-container");
let tech_container = document.getElementById("tech-container");
document.getElementById("add").addEventListener("click", () => {
    const newDivForEd = document.createElement("div");
    
    newDivForEd.innerHTML += `<div>Name of Course: <input type="text" name="course" id="course"> &nbsp;
    Name of Board: <input type="text" name="board" id="board"> &nbsp;
    Passing Year: <input type="text" name="year" id="year"> &nbsp;
    Percentage: <input type="text" name="percentage" id="percentage"> <div> &nbsp;
    `
    container.appendChild(newDivForEd);
})

document.getElementById("add_expr").addEventListener("click", () => {

    const newDivForEx = document.createElement("div");
    newDivForEx.innerHTML = `
                    Company Name: <input type="text" name="company" id="company"> &nbsp;
                    Designation: <input type="text" name="designation" id="designation"> &nbsp;
                    From: <input type="date" name="from_date" id="from_date"> &nbsp;
                    To: <input type="date" name="to_date" id="to_date"> &nbsp;
                    <br><br>
                `
    expr_container.appendChild(newDivForEx);
})


document.getElementById("add_lang").addEventListener("click", () => {
    let lang = prompt("Enter Language You want to add", "")
    const newDivForLan = document.createElement("div");
    newDivForLan.innerHTML = `
    <input type="checkbox"> ${lang}
    <input type="checkbox"> Read
    <input type="checkbox"> Write
    <input type="checkbox"> Speak
    <br><br>
    `
    lang_container.appendChild(newDivForLan);
})

document.getElementById("add_tech").addEventListener("click", () => {
    let tech = prompt("Enter Technology you want to add", " ");
    const newDivForTech = document.createElement("div");
    newDivForTech.innerHTML = `
    <div>
    <input type="checkbox" name="${tech}" id="${tech}"> ${tech} 
    <input type="radio" name="${tech}"> Beginner 
    <input type="radio" name="${tech}"> Intermediate 
    <input type="radio" name="${tech}"> Expert
</div><br>
    `
    tech_container.appendChild(newDivForTech);
})