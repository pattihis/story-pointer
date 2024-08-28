const welcomeEl = document.getElementById('welcome');
const startEstimation = document.getElementById('startEstimation');
const estimationEl = document.getElementById('estimation');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const questionCounter = document.getElementById('questionCounter');
const inputScore = document.getElementById('inputScore');
const saveTaskBtn = document.getElementById('saveTask');
const userScore = document.getElementById('score');
const prevQuestionBtn = document.getElementById('previousQuestion');
const recentPointsEl = document.getElementById('recentPoints');
const scoresEl = document.getElementById('scores');
const goBackBtn = document.getElementById('goBack');
const startOverBtn = document.getElementById('startOver');
const clearPointsBtn = document.getElementById('clearPoints');
const viewPointsBtn = document.getElementById('viewPoints');
const lastBackBtn = document.getElementById('lastBack');
const taskSummary = document.getElementById('taskSummary');

let score = 0;
let currentQ = 0;
let answersArr = [];
let recentPoints = [];

function nextQuestion() {
  currentQ++;
  if (currentQ < questions.length) {
    renderQuestion();
  } else {
    score = ceilToFibonacci(score);
    document.getElementById('fibonacci').textContent = score;
    userScore.textContent = score;
    renderSummary();
  }
}

function prevQuestion() {
  currentQ--;
  answersArr.pop();
  score = answersArr.reduce((acc, val) => acc + parseInt(val), 0);
  userScore.textContent = score;
  show(estimationEl);
  show(questionCounter);
  hide(inputScore);
  renderQuestion();
}

function addScore(value) {
  answersArr.push(value);
  score += parseInt(value);
  userScore.textContent = score;
}

function hide(element) {
  element.style.display = 'none';
}

function show(element) {
  element.style.display = 'block';
}

function reset() {
  score = 0;
  currentQ = 0;
  userScore.textContent = score;
}

function renderQuestion() {
  if (currentQ === 0) {
    hide(prevQuestionBtn);
  } else {
    show(prevQuestionBtn);
  }
  answersEl.innerHTML = '';
  questionEl.textContent = questions[currentQ].title;
  Object.entries(questions[currentQ].choices).forEach(([key, val]) => {
    answersEl.appendChild(createButton(key, val));
  });
  document.getElementById('counter').textContent = `Question ${currentQ + 1} of ${questions.length}`;
}

function renderStoryPoints() {
  scoresEl.innerHTML = '';
  show(recentPointsEl);
  recentPoints = JSON.parse(localStorage.getItem('storyPoints'));
  for (let i = 0; i < recentPoints.length; i++) {
    let scoreItem = document.createElement('div');
    scoreItem.className += 'row mb-3 p-2 d-flex justify-content-between';
    console.log(scoreItem);
    scoreItem.setAttribute('style', 'background-color:lavender;');
    scoreItem.innerHTML = `<div>${i + 1}. ${recentPoints[i].comment}</div><div>${recentPoints[i].finalScore}</div>`;
    scoresEl.appendChild(scoreItem);
  }
}

function createButton(key, val) {
  let button = document.createElement('button');
  button.className = 'btn btn-outline-dark btn-lg mr-2 mb-2';
  button.textContent = key;
  button.dataset.value = val;
  return button;
}

function ceilToFibonacci(n) {
  const fibonacciNumbers = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  for (let i = 0; i < fibonacciNumbers.length; i++) {
    if (n <= fibonacciNumbers[i]) {
      return fibonacciNumbers[i];
    }
  }
  return fibonacciNumbers[fibonacciNumbers.length - 1];
}

function renderSummary() {
  taskSummary.innerHTML = '';
  answersArr.forEach((answer, index) => {
    let summaryItem = document.createElement('li');
    let answerItem = document.createElement('span');
    answerItem.textContent = answer;
    summaryItem.textContent = `${questions[index].title}`;
    summaryItem.appendChild(answerItem);
    taskSummary.appendChild(summaryItem);
  });
  hide(estimationEl);
  hide(questionCounter);
  show(inputScore);
}

startEstimation.addEventListener('click', function () {
  hide(welcomeEl);
  renderQuestion();
  show(estimationEl);
  show(questionCounter);
});

answersEl.addEventListener('click', function (e) {
  if (e.target.matches('button')) {
    addScore(e.target.dataset.value);
    nextQuestion();
  }
});

prevQuestionBtn.addEventListener('click', function () {
  prevQuestion();
});

lastBackBtn.addEventListener('click', function () {
  prevQuestion();
});

viewPointsBtn.addEventListener('click', function () {
  hide(welcomeEl);
  hide(estimationEl);
  hide(questionCounter);
  hide(inputScore);
  renderStoryPoints();
  reset();
});

saveTaskBtn.addEventListener('click', function () {
  recentPoints = JSON.parse(localStorage.getItem('storyPoints')) || [];
  recentPoints.push({ comment: document.getElementById('task').value.trim(), finalScore: score });
  localStorage.setItem('storyPoints', JSON.stringify(recentPoints));
  hide(inputScore);
  renderStoryPoints();
  reset();
});

goBackBtn.addEventListener('click', function () {
  hide(recentPointsEl);
  show(welcomeEl);
});

clearPointsBtn.addEventListener('click', function () {
  recentPoints = [];
  localStorage.setItem('storyPoints', JSON.stringify(recentPoints));
  goBackBtn.click();
});

startOverBtn.addEventListener('click', function () {
  window.location.reload();
});
