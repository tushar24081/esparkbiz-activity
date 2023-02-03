let container = document.getElementById("educational-container");
let expr_container = document.getElementById("experience-container");
let lang_container = document.getElementById("lang-container");
let tech_container = document.getElementById("tech-container");

var lang_manager = ["Hindi", "Gujarati", "English"];
var tech_manager = ["Node", "Python", "PHP", "Django"]
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
    let lang = prompt("Enter Language You want to add")
    if (lang === null) {
        return null;
    }
    if (!lang_manager.includes(lang)) {
        lang_manager.push(lang)
        const newDivForLan = document.createElement("div");
        newDivForLan.classList.add("lan")
        newDivForLan.innerHTML = `
        <input type="checkbox" class="accent" name="${lang}" id="${lang}_parent" onclick="selectAll(this)"> ${lang}
        <input type="checkbox" id="${lang}" onclick="updateParent(this)"> Read
        <input type="checkbox" d="${lang}" onclick="updateParent(this)"> Write
        <input type="checkbox" d="${lang}" onclick="updateParent(this)"> Speak
        <br><br>
        `
        lang_container.appendChild(newDivForLan);

    }

})

document.getElementById("add_tech").addEventListener("click", () => {
    let tech = prompt("Enter Technology you want to add", "React");
    if (tech === null) {
        return null;
    }
    if (!tech_manager.includes(tech)) {
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
    }

})

function updateParent(language){
    const languageClass = language.id;
    let ans = true;
    const parentElement = document.querySelector(`#${languageClass}_parent`);
    parentElement.checked = true;
    
    
}

function selectAll(language){
    // console.log(language.name);
    if(!language.checked){
        document.querySelectorAll(`#${language.name}`).forEach((lan) => {
            lan.checked = false;
        })
    }
}
