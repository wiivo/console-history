const quizData = [
    {
        question: "Кой производител първи въвежда касетата с игра?",
        a: "Atari",
        b: "Magnavox",
        c: "Fairchild",
        d: "Coleco",
        correct: "c",
    },
    {
        question: "През коя година пазарът на домашни конзоли в Северна Америка се срива?",
        a: "1985",
        b: "1991",
        c: "1979",
        d: "1983",
        correct: "d",
    },
    {
        question: "Кое не е интелектуална собственост на Nintendo?",
        a: "The Legend of Zelda",
        b: "Metroid",
        c: "Sonic the Hedgehog",
        d: "Star Fox",
        correct: "c",
    },
    {
        question: "Коя конзола не използва дискове?",
        a: "Nintendo 64",
        b: "Sony Playstation",
        c: "Nintendo Gamecube",
        d: "Sega Dreamcast",
        correct: "a",
    },
    {
        question: "Кои два производителя са се надпреварвали през четвъртото поколение?",
        a: "Nintendo и Sony",
        b: "Nintendo и Sega",
        c: "Sega и Sony",
        d: "Sony и Microsoft",
        correct: "b",
    },
    {
        question: "Коя конзола не се счита за част от четвъртото поколение?",
        a: "Sega Genesis",
        b: "Sony Playstation",
        c: "Super Nintendo Entertainment System",
        d: "NEC TurboGrafx-16",
        correct: "b",
    },
    {
        question: "Кой е първият независим third-party разработчик на конзолни видеоигри?",
        a: "Namco",
        b: "Ubisoft",
        c: "Konami",
        d: "Activision",
        correct: "d",
    },
    {
        question: "Кой производител напуска пазара за хардуер през 2001 година?",
        a: "NEC",
        b: "Microsoft",
        c: "Sega",
        d: "Atari",
        correct: "c",
    },
    {
        question: "Коя е най-продаваната конзола за всички времена",
        a: "Sony Playstation 2",
        b: "Xbox 360",
        c: "Sony Playstation 4",
        d: "Nintendo Switch",
        correct: "a",
    },
    {
        question: "Кое от изброените не е име на конзола на Sega?",
        a: "Jaguar",
        b: "SG-1000",
        c: "Saturn",
        d: "Mega Drive",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    quiz.style.display = "block";
    answerEls.forEach(answerEl => answerEl.checked = false);
    questionEl.innerText = quizData[currentQuiz].question;
    a_text.innerText = quizData[currentQuiz].a;
    b_text.innerText = quizData[currentQuiz].b;
    c_text.innerText = quizData[currentQuiz].c;
    d_text.innerText = quizData[currentQuiz].d;
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = '<h2>Отговорили сте на ' + score + ' от ' + quizData.length + ' въпроса правилно.</h2><button onclick="location.reload()" class="submitBtn">Нов опит</button>'
        }
    }
})