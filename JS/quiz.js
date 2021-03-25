

const quizData = [
    {
      question: "Your sleep hour duration is around 7-8 hours on most days",
      a: "Yes",
      b: "No",
      correct: "a",
    },
    {
      question: "Poor appetite or overeating",
      a: "Yes",
      b: "No",
      correct: "b",
    },
    {
      question: "Excessive junk food or drug/alcohol consumption",
      a: "Yes",
      b: "No",
      correct: "b",
    },
    {
        question: "Poor interaction with family, friends and co-mates",
      a: "Yes",
      b: "No",
      correct: "b",
    },
    {
        question: "Ever been through a traumatic experience in past due to which you have any unwanted and recurring memories, flashbacks or vivid nightmares",
      a: "Yes",
      b: "No",
      correct: "b",
    },
    {
        question: "Under any kind of parental, peer or performance pressure",
      a: "Yes",
      b: "No",
      correct: "b",
    },
    {
        question: "Guilt about any decision about your personal or personal life taken by you or by your parents",
      a: "Yes",
      b: "No",
      correct: "b",
    },
    {
        question: "Problems accepting your sexuality by your own-self or by society",
      a: "Yes",
      b: "No",
      correct: "b",
    },
    {
        question: "Inferiority complex about anything",
      a: "Yes",
      b: "No",
      correct: "b",
    },
    {
        question: "Felt sad or lonely or had suicidal thoughts",
      a: "Yes",
      b: "No",
      correct: "b",
    },
  ];
  
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
      else if{}
      else {
        quiz.innerHTML = `
              <h2>Your score is ${score}/${quizData.length}.</h2>
              
              <button onclick="history.go(0)">Take the quiz again.</button>
          ` // location.reload() won't work in CodePen for security reasons;
      }
    }
  });
  