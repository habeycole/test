const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement =document.getElementById('answer-buttons')

let shuffledQuestions,currenrQuestionIndex;
let quizScore = 0;


startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', () =>{
    currenrQuestionIndex++
    setnextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(() =>Math.random() -0.5)
    currenrQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore=0
}
s
function setnextQuestion () {
    resetState();
    showQuestion(shuffledQuestions[currenrQuestionIndex])
}



function showQuestion(question) {
    questionElement.innerText= question.question;
    question.answers.forEach(answer) =={
        const button = document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState () {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}



function selectAnswer(e){
    const selectButton=e.target
    const correct= selectedButton.dataset.correct

    setStatusClass(document.body.correct)
    Array.from(answersButtonsElement.children).forEach(button)=={
        setStatusClass(button,button.dataset.correct)
    }}
    if(shuffledQuestions.length > currenrQuestionIndex +1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText= "restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset = correct) {
        quizScore++
    }
    document.getElementById('right-answers').innerHTML=quizScore
    
}


function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("Correct")
    } else {
        element.classList.add("Wrong")
    }
}


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
    question: 'What is the capital of America?',
    answers: [
        {
            { text: 'United States', correct: false},
            { text: 'Los Angeles', correct: false},
            { text: 'Washington', correct: true},
            { text: 'Berlin', correct: false}
        ],
    },
    {
        question: 'Which of these is a country in Africa?',
        answers: [
            {
                {text: 'United States', correct: false},
                {text: 'Nigeria', correct: true},
                {text: 'United Kingdom', correct: false},
                {text: 'Australia', correct: false}
            ],
        },
        {
            question: 'Pick the odd one out:',
            answers: [
                {
                    {text: 'United States', correct: true},
                    {text: 'Los Angeles', correct: false},
                    {text: 'Washington', correct: false},
                    {text: 'Berlin', correct: false}
                ],
            },
            {
                question: 'Pick the odd one out:',
                answers: [
                    {
                        {text: 'Dollar', correct: false},
                        {text: 'Rand', correct: false},
                        {text: 'London', correct: true},
                        {text: 'Euro', correct: false}
                    ],
                },
                {
                    question: 'One of these aligns perfectly with the UK?',
                    answers: [
                        {
                            {text: 'US', correct: false},
                            {text: 'British Columbia', correct: false},
                            {text: 'The Queen', correct: true},
                            {text: 'Anonymous Hackers', correct: false}
                        ],
                    },
                    {
                        question: 'What is the capital of Nigeria?',
                        answers: [
                            {
                                {text: 'Kenya', correct: false},
                                {text: 'Nairobi', correct: false},
                                {text: 'Accra', correct: false},
                                {text: 'Abuja', correct: true}
                            ],
                        },
    ]