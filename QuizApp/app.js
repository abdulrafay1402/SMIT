const questions = [
    {
        title: "What is the capital city of Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
        answer: 2
    },
    {
        title: "When did Pakistan gain independence?",
        options: ["August 14, 1947", "August 15, 1947", "March 23, 1940", "December 16, 1971"],
        answer: 0
    },
    {
        title: "Who is known as the founder of Pakistan?",
        options: ["Allama Iqbal", "Liaquat Ali Khan", "Muhammad Ali Jinnah", "Fatima Jinnah"],
        answer: 2
    },
    {
        title: "What is the national language of Pakistan?",
        options: ["Punjabi", "Sindhi", "Urdu", "English"],
        answer: 2
    },
    {
        title: "Which is the highest mountain peak in Pakistan?",
        options: ["Nanga Parbat", "K2", "Rakaposhi", "Broad Peak"],
        answer: 1
    },
    {
        title: "What is the national sport of Pakistan?",
        options: ["Cricket", "Hockey", "Football", "Squash"],
        answer: 1
    },
    {
        title: "Which river is the longest in Pakistan?",
        options: ["Chenab", "Jhelum", "Ravi", "Indus"],
        answer: 3
    },
    {
        title: "What is the currency of Pakistan?",
        options: ["Rupee", "Riyal", "Dinar", "Taka"],
        answer: 0
    },
    {
        title: "Who wrote the national anthem of Pakistan?",
        options: ["Allama Iqbal", "Faiz Ahmed Faiz", "Hafeez Jalandhari", "Ahmed Faraz"],
        answer: 2
    },
    {
        title: "Which city is known as the 'City of Lights' in Pakistan?",
        options: ["Islamabad", "Lahore", "Karachi", "Faisalabad"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function startQuiz() {
    document.querySelector('.start-screen').classList.remove('active');
    document.querySelector('.quiz-screen').classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('questionHeader').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById('questionTitle').textContent = question.title;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    for (let index = 0; index < question.options.length; index++) {
        const option = question.options[index];
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectAnswer(index);
        
        optionDiv.innerHTML = `
            <input type="radio" name="answer" id="option${index}" value="${index}">
            <label for="option${index}">${option}</label>
        `;
        
        optionsContainer.appendChild(optionDiv);
    }

    selectedAnswer = null;
    document.getElementById('nextBtn').disabled = true;
}

function selectAnswer(index) {
    selectedAnswer = index;
    
    const allOptions = document.querySelectorAll('.option');
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.remove('selected');
    }
    
    document.querySelectorAll('.option')[index].classList.add('selected');
    document.getElementById(`option${index}`).checked = true;
    
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedAnswer === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.querySelector('.quiz-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');
    
    const percentage = ((score / questions.length) * 100).toFixed(0);
    
    document.getElementById('scoreDisplay').textContent = `${score}/${questions.length}`;
    document.getElementById('percentage').textContent = `${percentage}%`;
    
    let message = '';
    if (percentage >= 80) {
        message = 'Excellent! You know Pakistan very well!';
    } else if (percentage >= 60) {
        message = 'Good job! Keep learning more!';
    } else if (percentage >= 40) {
        message = 'Not bad! There\'s room for improvement!';
    } else {
        message = 'Keep trying! Learn more about Pakistan!';
    }
    
    document.getElementById('resultMessage').textContent = message;
}

function restartQuiz() {
    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.start-screen').classList.add('active');
}