console.clear();
let voices = [];
let synth = window.speechSynthesis; //Initialise SpeechSythesis API

window.speechSynthesis.addEventListener("voiceschanged", function () {
  voices = window.speechSynthesis.getVoices();
});

const englishMaleVoice = voices.find((voice) => voice.name === "Google UK English Male");

const questionNumber = document.querySelector(".question-number"); //question number appears here
const questionText = document.querySelector(".question-text"); //question text appears here
const answerText = document.querySelector(".answer-text"); //answer text appears here
const optionContainer = document.querySelector(".option-container"); //option container
const answersIndicatorContainer = document.querySelector(".answers-indicator"); //answer indicator container
const homeBox = document.querySelector(".home-box"); //home box (initial screen)
const quizBox = document.querySelector(".quiz-box"); // quiz box
const resultBox = document.querySelector(".result-box"); // result box
const nextButton = document.querySelector(".next-btn"); // next button
// const button = document.querySelector(".btn"); //button
const showDefinitionButton = document.getElementById("show-definition"); // show definition button
// const totalAvailableQuestions= document.querySelector(".total-available-questions"); // total available questions
// const questionLimit = 5;
const answerKnownContainer = document.querySelector(".answer-known-container");
const questionLimit = questions.length;
const questionsAskedContainer = document.querySelector(
  ".questions-asked-container"
); // questions asked container (results screen)

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
let questionsAskedList = [];
let yourAnswersList = [];

// add the questions to the availQuestions array
function setAvailableQuestions() {
  let questionIndices = [...Array(questions.length).keys()];
  questionIndices = questionIndices.sort((a, b) => 0.5 - Math.random());

  for (let item of questionIndices) {
    availableQuestions.push(questions[item]);
  }

}

function resetDefinitionButton() {
  showDefinitionButton.classList.remove("active");
  showDefinitionButton.innerText = "Show definition";
}
let read; 
//set question number, question text and answer options - line 35 to 83
function getNewQuestion() {
  answerKnownContainer.classList.add("hide");
  answerText.classList.add("hide");
  nextButton.classList.add("hide");
  resetDefinitionButton();
  //set question number
  questionNumber.innerHTML = `Question ${
    questionCounter + 1
  } of ${questionLimit}`;

  //get question
  read = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.voice = englishMaleVoice;
    speech.pitch = 0.7;
    speech.volume = 0.9;
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
  };
  
  const questionIndex = availableQuestions[questionCounter];
  currentQuestion = questionIndex;
  console.log(currentQuestion.q);
  setTimeout(read(currentQuestion.q), 400);
  //set question text
  questionText.innerHTML = currentQuestion.q;
  answerText.innerHTML = currentQuestion.a;
  questionsAskedList.push(currentQuestion);
  

  readBtn.addEventListener("click", () => {
    read(currentQuestion.q);
  });


  // show question image if "img" property exists

  // if (currentQuestion.hasOwnProperty("img")) {
  //   console.log(currentQuestion.img);
  //   const img = document.createElement("img");
  //   img.src = currentQuestion.img;
  //   questionText.appendChild(img);
  // }
  let animationDelay = 0.1;

  optionContainer.innerHTML = "";
  // const optionsLength = currentQuestion.options.length;
  // console.log(optionsLength)
  const yes = document.createElement("button");
yes.innerText = "yes";
yes.classList.add("btn");
yes.style.backgroundColor = "green";
yes.setAttribute("onclick", "showHideNextButton()");
const no = document.createElement("button");
no.innerText = "no";
no.style.backgroundColor = "red" ;
no.classList.add("btn");
no.setAttribute("onclick", "showHideNextButton()");
optionContainer.appendChild(yes);
optionContainer.appendChild(no);


  readBtn.focus();
  questionCounter++;
}

function toggleDefinitionButton() {
  showDefinitionButton.classList.toggle("active");
  if (!showDefinitionButton.classList.contains("active")) {
    showDefinitionButton.innerText = "Show definition";
  } else if (showDefinitionButton.classList.contains("active")) {
    read(currentQuestion.a);
    showDefinitionButton.innerText = "Hide definition";
  }
}

function showHideDefinition() {
  answerText.classList.toggle("hide");
  answerKnownContainer.classList.remove("hide");
  toggleDefinitionButton();
}

function showHideNextButton(){
  nextButton.classList.remove("hide");
}

function getResult(element) {
  const answerText = element.innerHTML;
  yourAnswersList.push(answerText);
  console.log(yourAnswersList);

yes.addEventListener("click", ()=>{ element.classList.add("correct")});
// yes.addEventListener("click", ()=>{ console.log("yes")});

  //get the answer by comparing the id of the clicked option
  if (id === currentQuestion.a) {
    // add green colour if user selects correct option
    
    //add a tick mark to the answer indicator
    updateAnswerIndicator("correct");
    correctAnswers++;
  } else {
    // add red colour if user selects incorrect option
    element.classList.add("incorrect");
    //add a cross mark to the answer indicator
    updateAnswerIndicator("incorrect");
  }
  attempt++;
  nextButton.classList.remove("hide");
  answerText.classList.remove("hide");
}

//add shortcut key for the return key to go to the next question
function pressEnterForNextQu(e) {
  if (e.key === "Enter") {
    next();
  }
}

// make other options unclickable once user has selected an option
function unclickableOptions() {
  const optionsLength = optionContainer.children.length;
  for (let i = 0; i < optionsLength; i++) {
    optionContainer.children[i].classList.add("already-answered");
    optionContainer.children[i].setAttribute("disabled", "");
  }
}

//creating answersIndicator box, and answer indicator circles for each question
function answersIndicator() {
  answersIndicatorContainer.innerHTML = "";
  const totalQuestion = questionLimit;
  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
}

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
}

function next() {
  // document.removeEventListener("keydown", pressEnterForNextQu);
  if (questionCounter >= questionLimit) {
    quizOver();
  } else {
    getNewQuestion();
    resetDefinitionButton();
  }
}

function quizOver() {
  //hide quizBox
  quizBox.classList.add("hide");
  //show resultBox
  resultBox.classList.remove("hide");
  quizResult();
}

//get the quiz result
function quizResult() {
  resultBox.querySelector(".total-score").innerHTML =
    correctAnswers + "/" + questionLimit;
  displayQuestions();
}

function displayQuestions() {
  for (let i = 0; i < questionsAskedList.length; i++) {
    //create table row for each question
    const questionRow = document.createElement("tr");

    //create a cell to show the question number
    const questionNoCell = document.createElement("td");
    questionNoCell.textContent = i + 1;
    questionNoCell.setAttribute("data-cell", "Question no: ");

    //create a cell to show the question text
    const questionAskedCell = document.createElement("td");
    //   if (questionsAskedList[i].hasOwnProperty("q3")) {
    //     questionAskedCell.innerHTML =
    //       questionsAskedList[i].q +
    //       " " +
    //       questionsAskedList[i].q2 +
    //       " " +
    //       questionsAskedList[i].q3;
    //   } else if (questionsAskedList[i].hasOwnProperty("q2")) {
    //     let q2QuestionContents = questionsAskedList[i].q + " " + questionsAskedList[i].q2;
    //     console.log(q2QuestionContents);
    //     questionAskedCell.innerHTML = q2QuestionContents;
    //   } else {
    questionAskedCell.innerHTML = questionsAskedList[i].q;
    //   }
    questionAskedCell.setAttribute("data-cell", "Question: ");

    //create a table cell to show the English translation
    const translationCell = document.createElement("td");
    translationCell.innerHTML = questionsAskedList[i].a;
    translationCell.setAttribute("data-cell", "Translation: ");

    // create a table cell to show the given answer
    const yourAnswerCell = document.createElement("td");
    yourAnswerCell.innerHTML = yourAnswersList[i];
    yourAnswerCell.setAttribute("data-cell", "You answered: ");

    //create a table cell to show the correct answer
    const correctAnswerCell = document.createElement("td");
    correctAnswerCell.innerHTML =
      questionsAskedList[i].options[questionsAskedList[i].answer];
    correctAnswerCell.setAttribute("data-cell", "Correct answer: ");

    //create a table cell to show if the given answer was right or wrong
    const resultCell = document.createElement("td");
    if (yourAnswerCell.innerHTML === correctAnswerCell.innerHTML) {
      resultCell.innerHTML =
        "<img src='./images/correct.png' alt = 'correct' width='30'/>";
      resultCell.classList.add("correct");
    } else {
      resultCell.innerHTML =
        "<img src='./images/incorrect.png' alt = 'incorrect' width='20'/>";
      resultCell.classList.add("incorrect");
    }
    //append the created cells to the question row
    questionRow.appendChild(questionNoCell);
    questionRow.appendChild(questionAskedCell);
    questionRow.appendChild(translationCell);
    //   questionRow.appendChild(yourAnswerCell);
    //   questionRow.appendChild(correctAnswerCell);
    questionRow.appendChild(resultCell);
    //Add the new row to questionsAskedContainer
    questionsAskedContainer.appendChild(questionRow);
  }
}

function removeQuestions() {
  questionsAskedContainer.textContent = "";
}

function resetQuiz() {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
  availableQuestions = [];
  questionsAskedList = [];
  yourAnswersList = [];
  removeQuestions();
}

function tryAgainQuiz() {
  //hide the result box
  resultBox.classList.add("hide");

  //show the quiz box
  quizBox.classList.remove("hide");

  resetQuiz();
  startQuiz();
}

function goToHome() {
  //hide result box
  resultBox.classList.add("hide");
  // show home box
  homeBox.classList.remove("hide");
  resetQuiz();
}

function startQuiz() {
  // hide home box
  homeBox.classList.add("hide");
  //hide result box
  resultBox.classList.add("hide");
  // show quiz box
  quizBox.classList.remove("hide");

  setAvailableQuestions();
  getNewQuestion();
  // to create indicator of answers
  answersIndicator();
}

window.onload = function () {
  homeBox.querySelector(".total-questions").innerHTML = questionLimit;
};

//Fetching DOM elements
const readBtn = document.querySelector("#read-btn");
const body = document.querySelector("body");