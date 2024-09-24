const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const answerText = document.querySelector(".answer-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const nextButton = document.querySelector(".next-btn");
const button = document.querySelector(".btn");
const showDefinitionButton = document.getElementById("show-definition")
questionLimit = 5;
// const questionLimit = questions.length;
const questionsAskedContainer = document.querySelector(".questions-asked-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
let questionsAskedList = [];
let yourAnswersList = [];


// add the questions to the availableQuestions array
function setAvailableQuestions() {
  const totalQuestions = questions.length;
  for (let i = 0; i < totalQuestions; i++) {
    availableQuestions.push(questions[i]);
  }
}

//set question number, question text and answer options - line 35 to 110
function getNewQuestion() {
  answerText.classList.add("hide");  
  nextButton.classList.add("hide");
  //set question number
  questionNumber.innerHTML = `Question ${
    questionCounter + 1
  } of ${questionLimit}`;

  //get random question
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  //set question text
  questionText.innerHTML = currentQuestion.q;
  answerText.innerHTML = currentQuestion.a;
  questionsAskedList.push(currentQuestion);
  setTimeout(speak, 500);

  // get the position of "QuestionIndex" from the "AvailableQuestions" array

  const index1 = availableQuestions.indexOf(questionIndex);

  //remove questionIndex from the ‘AvailableQuestions’ array

  availableQuestions.splice(index1, 1);

  // show question image if "img" property exists

  // if (currentQuestion.hasOwnProperty("img")) {
  //   console.log(currentQuestion.img);
  //   const img = document.createElement("img");
  //   img.src = currentQuestion.img;
  //   questionText.appendChild(img);
  // }

  // set options
  // get the length of the list of options
  const optionsLength = currentQuestion.options.length;

  // optionContainer.innerHTML = "";

  let animationDelay = 0.1;

  readBtn.focus();
questionCounter++;
}

function changeShowHideText(){
if (!nextButton.classList.contains(!"hide")){
  console.log("next button does not contain class 'hide'")
  showDefinitionButton.innerText === "Show definition"
} else if (nextButton.classList.contains("hide")){
  console.log("next button does contains class 'hide'")
  showDefinitionButton.innerText === "Hide definition"
}
}
function showDefinition() {
  answerText.classList.toggle("hide"); 
  speakDefinition(); 
  nextButton.classList.toggle("hide");
  showDefinitionButton.classList.toggle("active");
  if (!showDefinitionButton.classList.contains("active")){
    showDefinitionButton.innerText = "Show definition"
  } else if (showDefinitionButton.classList.contains("active")){
    showDefinitionButton.innerText = "Hide definition"
  }
}



function getResult(element) {

  const answerText = element.innerHTML;
  yourAnswersList.push(answerText);
  console.log(yourAnswersList);

  //get the answer by comparing the id of the clicked option
  if (id === currentQuestion.answer) {
    // add green colour if user selects correct option
    element.classList.add("correct");
    //add a tick mark to the answer indicator
    updateAnswerIndicator("correct");
    correctAnswers++;
  } else {
    // add red colour if user selects incorrect option
    element.classList.add("incorrect");
    //add a cross mark to the answer indicator
    updateAnswerIndicator("incorrect");

    //if answer is incorrect then show the correct answer
    // const optionsLength = optionContainer.children.length;
    // for (let i = 0; i < optionsLength; i++) {
    //   setTimeout(() => {
    //     if (
    //       parseInt(optionContainer.children[i].id) === currentQuestion.answer
    //     ) {
    //       optionContainer.children[i].classList.add("correct");
    //     }
    //   }, 400);
    // }
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

//make other options unclickable once user has selected an option
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
      const questionNoCell = document.createElement("td")
      questionNoCell.textContent = i+1;
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
      correctAnswerCell.innerHTML = questionsAskedList[i].options[questionsAskedList[i].answer];
      correctAnswerCell.setAttribute("data-cell", "Correct answer: ");
  
      //create a table cell to show if the given answer was right or wrong
      const resultCell = document.createElement("td");
      if(yourAnswerCell.innerHTML === correctAnswerCell.innerHTML) {
        resultCell.innerHTML = "<img src='./images/correct.png' alt = 'correct' width='30'/>";
        resultCell.classList.add("correct");
      } else {
        resultCell.innerHTML = "<img src='./images/incorrect.png' alt = 'incorrect' width='20'/>";
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

// Text to speech

//Initialise SppechSythesis API
const synth = window.speechSynthesis;

//Fetching DOM elements
const readBtn = document.querySelector("#read-btn");

const voiceSelect = document.querySelector("#voice-select");
const body = document.querySelector("body");

//Initialise the voices array
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();

  //Loop through voices and create an option for each one
  voices.forEach((voice) => {
    //Create option element for each voice
    const option = document.createElement("option");
    //Fill option with voice and language
    option.textContent = voice.lang + " (" + voice.name + ")";
    //Set required option attributes
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
    option.style.fontSize = "0.9rem";
    // if(option.data-lang === fr-FR ){
    //   option.setAttribute("selected");
    // }
  });
};

getVoices();

//the following code is required in order to get the voices.
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}
//Speak
const speak = () => {
  //Check if already speaking
  if (synth.speaking) {
    console.error("Already speaking...");
    return;
  }
  if (questionText.textContent !== "") {
    //Get text to speak
    const speakText = new SpeechSynthesisUtterance(questionText.textContent);

    //Speak end
    speakText.onend = (e) => {
      console.log("Finished speaking");
    };
    //Speak error
    speakText.onerror = (e) => {
      console.error("Something went wrong");
    };
    //Determining which voice to use to speak
    const selectedVoice = "Google UK English Male";
    console.log(questionText.textContent);

    //loop through the voices and if the current iteration matches what we selected then use that voice
    voices.forEach((voice) => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
        console.log(voice);
      }
    });

    //Speak
    synth.speak(speakText);
  }
};

const speakDefinition = () => {
  //Check if already speaking
  if (synth.speaking) {
    console.error("Already speaking...");
    return;
  }
  if (questionText.textContent !== "") {
    //Get text to speak
    const speakText = new SpeechSynthesisUtterance(answerText.textContent);

    //Speak end
    speakText.onend = (e) => {
      console.log("Finished speaking");
    };
    //Speak error
    speakText.onerror = (e) => {
      console.error("Something went wrong");
    };
    //Determining which voice to use to speak
    const selectedVoice = "Google UK English Male";

    //loop through the voices and if the current iteration matches what we selected then use that voice
    voices.forEach((voice) => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
        console.log(voice);
      }
    });

    //Speak
    synth.speak(speakText);
  }
};

//Event listeners
// Text form submission
readBtn.addEventListener("click", (e) => {
  speak();
});