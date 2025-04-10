const quizData =[
    {
        question:"which language runs in web browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        correct:"d"
    },
    {
      question:"what css stands for?",
      a:"Central Style Sheets",
      b:"Cascading Style sheets",
      c:"Cascading Simple Sheets",
      d:"cars SUVs sailboats",
      correct:"b"
    },
    {
        question:"what does HTML stands for?",
        a:"HyperText MarkUp Language",
        b:"HyperText MarkDown Language",
        c:"HyperLoop Machine Language",
        d:"Helicopters Terminals MotorBoats Lomborginis",
        correct:"a"
    },
   {
        question:"when was JavaScript Launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
        correct:"b"
    }
];

const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitbtn=document.getElementById("submit");

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();
  const currentQuizData=quizData[currentQuiz];
  questionEl.innerText=currentQuizData.question;
  a_text.innerText=currentQuizData.a;
  b_text.innerText=currentQuizData.b;
  c_text.innerText=currentQuizData.c;
  d_text.innerText=currentQuizData.d;
}
function deselectAnswers()
{
    answerEls.forEach((answerEls)=>
    {
        answerEls.checked=false;
    });
}
function selectAnswer()
{
    let answer;
    answerEls.forEach((answerEle)=>{
        if(answerEle.checked)
        {
            answer=answerEle.id;
        }

    });
    return answer;

}
submitbtn.addEventListener("click",function(){
    const answers=selectAnswer();
    if(answers)
    {
        if(answers === quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length)
        {
            loadQuiz();
        }
        else{
             quiz.innerHTML=`<h2>"you answered ${score}/${quizData.length} correctly"</h2>
             <button onclick="location.reload()">Reload</button>`;

        }
    }
});
