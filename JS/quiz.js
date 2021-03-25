const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
};

loadQuiz();

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else if (score <= (quizData.length) / 3) {

            quiz.innerHTML = `
              <h2>Your score is ${score}/${quizData.length}.</h2>
              <h6 style= "color: red; padding-left: 8px;">Your condition is severly bad. Consult a psychiatrist asap.<br>Below are some website recommendations:</h6>
              <div style="margin-left:8px;"><a href="https://thervo.com/psychiatrists"Thervo</a><br>
              <a href="https://doctor.webmd.com/find-a-doctor/specialty/psychiatry">WebMD</a><br>
              <a href="https://www.lybrate.com/psychiatrist">Lybrate</a><br></div>
              <button onclick="history.go(0)">Take the quiz again.</button>
          `
        }
        else if (score <= 2 * (quizData.length) / 3) {

            quiz.innerHTML = `
              <h2>Your score is ${score}/${quizData.length}.</h2>
              <h6 style= "color: orange; padding-left: 8px;">You ain't that good to go. But you can be cured. Calm yourself down and give some time to figure out your thoughts .<br>Stay positive! Below are some links to youtube playlists: </h6>
              <div style="margin-left:8px;"><a href="https://youtu.be/Tm8LGxTLtQk">One more light</a><br>
              <a href="https://youtu.be/1srs1YoTVzs">Fear is a liar</a><br>
              <a href="https://youtu.be/j2WWrupMBAE">Who you are</a><br>
              <a href="https://youtu.be/q7yCLn-O-Y0">Carry On</a><br>
              <a href="https://youtu.be/IYzlVDlE72w">The Greatest love of all</a><br>
              <a href="https://youtu.be/fgmpWkUcpjo">Not gonna die</a><br>
              <a href=" https://youtu.be/xo1VInw-SKc">Fight Song</a><br>
              <a href="https://youtu.be/CjxugyZCfuw">This is me</a><br>
              <a href="https://youtu.be/RcohgARJTWQ">Get Up</a><br></div>
              <button onclick="history.go(0)">Take the quiz again.</button>
          `
        }
        else {
            quiz.innerHTML = `
              <h2>Your score is ${score}/${quizData.length}.</h2>
              <h6 style= "color: green; padding-left: 8px;">You're good to go. Just hang out a little with your buddies and you'll feel relaxed.</h6>
              <button onclick="history.go(0)">Take the quiz again.</button>
          `
        }
    }
});
