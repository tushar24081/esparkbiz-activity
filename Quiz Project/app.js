var output = [];
var myQuestions = [
    {
        question: "Who is the President of USA? ",
        answers: {
            a: "Rishi Sunak",
            b: "Joe Biden",
            c: "Draupadi Murmu"
        },
        correctAns: "b"
    },
    {
        question: "What is 3 + 3",
        answers: {
            a: 6,
            b: 9,
            c: 20
        },
        correctAns: "a"
    }
]
var answer = [];
for(let i=0; i < myQuestions.length; i++){
    answer = []
    for(letter in myQuestions[i].answers){
        let radioBtn = `<input type="radio" name=question${i} value=${letter}> ${letter} : ${myQuestions[i].answers[letter]} </input><br>`
        answer.push(radioBtn)
    }
    output.push(`<div class="question"> ${myQuestions[i].question} </div>
    <div class="ans">${answer.join("")}</div><br>
    `)
}

document.getElementById("quiz").innerHTML = output.join("")


function showResults(){
    var answerContainers = document.querySelectorAll(".ans");
    var userAns = "";
    var numCorrect = 0;
    let wrongAns = ""
    //for each question we are iterating:
    for(let i=0; i<myQuestions.length; i++){
        userAns = (answerContainers[i].querySelector("input[name=question"+i+"]:checked") || {}).value;
        if(userAns === myQuestions[i].correctAns){
            numCorrect++;
            answerContainers[i].style.color = "green"
        }
        else{
            answerContainers[i].style.color = "red"
            wrongAns += `<p style="color: red">The correct ans of Question ${i+1} is ${myQuestions[i].correctAns}</p> <br>`;
        }
    }
    document.getElementById("wrong").innerHTML = wrongAns

}

document.getElementById("submit").addEventListener("click", showResults)