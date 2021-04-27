const quiz = [
    {
        Q: "別名「剣豪将軍」とも言われ、将軍権力が失墜していた室町幕府の復興に努めたとされる足利将軍は誰でしょうか？",
        answers: ["足利義輝","足利義満","足利義政","足利義昭"],
        correct: "足利義輝"
    },
    {
        Q: "羽柴秀吉（のちの豊臣秀吉）に仕えた軍師は２人いたことで知られています。一人は黒田官兵衛ですが、もう一人は誰でしょうか？",
        answers: ["石田三成","藤堂高虎","福島正則","竹中半兵衛"],
        correct: "竹中半兵衛"
    },
    {
        Q: "比叡山焼き討ちの後、織田信長はある名を自称しています。それは何という名だったのでしょうか？",
        answers: ["毘沙門天","大黒天","大魔縁","第六天魔王"],
        correct: "第六天魔王"
    },
    {
        Q: "戦国時代、鉄砲の伝来によって合戦の形も変わりました。あまたある合戦の中で使われる武器は刀、弓、槍など沢山あります。さて、合戦中に死亡した武将、足軽の死因となった一番の武器は次のうち、どれでしょうか？",
        answers: ["鉄砲","刀","弓","槍"],
        correct: "槍"
    },
    {
        Q: "徳川家康の家臣には、有名な伊賀の忍者がいたといわれていますが、それは次のうち誰でしょうか？",
        answers: ["風魔小太郎","服部半蔵","霧隠才蔵","猿飛佐助"],
        correct: "服部半蔵"
    },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $a = document.getElementsByTagName("button");
const buttonLength = $a.length;

                    // クイズ問題定義
const setQuiz = () => {
    document.getElementById("JsQ").textContent = quiz[quizIndex].Q;
    let i = 0;
    while (i < $a.length) {
        $a[i].textContent = quiz[quizIndex].answers[i];
        i++;
    }
}
setQuiz();


                    // クリック後正誤判定
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("Congratulation!");
        score++;
    } else {
        window.alert("You got it wrong!");
    }

    quizIndex++;
    if (quizIndex < quizLength) {
        setQuiz();
    } else {
        window.alert("Finish!  " + quizLength + "問中" + score + "問正解です！");

    }
}

let clickIndex = 0;
while (clickIndex < $a.length) {
    $a[clickIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    clickIndex++;
}
