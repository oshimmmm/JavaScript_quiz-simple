const quiz = [
    {
        question: "ちいかわといつも一緒にいるのは？",
        answers: [
            "はちわれ",
            "よろいさん",
            "シーサー",
            "栗饅頭"
        ],
        correct: "はちわれ"
    }, {
        question: "言葉が話せるのは？",
        answers: [
            "ちいかわ",
            "はちわれ",
            "うさぎ",
            "ぱじゃまパーティーズみどり"
        ],
        correct: "はちわれ"
    }, {
        question: "思い出リボンを花瓶に結んでいたのは？",
        answers: [
            "うさぎ",
            "栗饅頭",
            "シーサー",
            "はちわれ"
        ],
        correct: "はちわれ"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;

    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};
setupQuiz();

const showTemporaryImage = (imageId, persist = false) => {
    const image = document.getElementById(imageId);
    image.style.display = "block";
    if (!persist) {
        setTimeout(() => {
            image.style.display = "none";
        }, 2000);
    }
};

const showAlert = (message, alertType = "alert-primary", displayTime = 2000, persist = false) => {
    const alertBox = document.getElementById("alert-box");
    const alertMessage = document.getElementById("alert-message");
    
    alertBox.className = `alert ${alertType} alert-box`;
    alertMessage.textContent = message;
    alertBox.style.display = "block";
    
    if (!persist) {
        setTimeout(() => {
            alertBox.style.display = "none";
        }, displayTime);
    }
};

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        score++;
        if (quizIndex < quizLength -1) {
            showTemporaryImage("correct-image");
            showAlert("正解！", "alert-success");
        } else {
            showTemporaryImage("correct-image", true);
            showAlert("終了！あなたの正解数は " + score + " / " + quizLength + " です！！", "alert-info", 2000, true);
        }
    } else {
        if (quizIndex < quizLength -1) {
            showTemporaryImage("incorrect-image");
            showAlert("ざんねん！", "alert-danger");
        } else {
            showTemporaryImage("incorrect-image", true);
            showAlert("終了！あなたの正解数は " + score + " / " + quizLength + " です！！", "alert-info", 2000, true);
        }
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handleIndex++;
};




