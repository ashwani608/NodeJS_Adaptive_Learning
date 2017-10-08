(function() {
  const myQuestions = [
    {
      question: "Consider the circle $S:x^2+y^2-4x-1=0$ and the line $L:y=3x-1$. If the line $L$ cuts the circle at $A$ and $B$ then, Length of the chord $AB$ equal",
      answers: {
        a: "$2\\sqrt{5}$",
        b: "$\\sqrt{5}$",
        c: "$5\\sqrt{2}$",
        d: "$\\sqrt{10}$"
      },
      correctAnswer: "d"
    },
    {
      question: "Consider the circle $S:x^2+y^2-4x-1=0$ and the line $L:y=3x-1$. If the line $L$ cuts the circle at $A$ and $B$ then, The angle subtended by the chord $AB$ in the minor arc of $S$ is",
      answers: {
        a: "$\\frac{3\\pi }{4}$",
        b: "$\\frac{5\\pi }{6}$",
        c: "$\\frac{2\\pi }{3}$",
        d: "$\\frac{\\pi }{4}$"
      },
      correctAnswer: "c"
    },
    {
      question: "Consider the circle $S:x^2+y^2-4x-1=0$ and the line $L:y=3x-1$. Ifthe line $L$ cuts the circle at $A$ and $B$ then, Acute angle between the line $L$ and the circle $S$ is ",
      answers: {
        a: "$\\frac{\\pi }{2}$",
        b: "$\\frac{\\pi }{3}$",
        c: "$\\frac{\\pi }{4}$",
        d: "$\\frac{\\pi }{6}$"
      },
      correctAnswer: "b"
    },
    {
      question: "In $\\mathit{\\Delta} ABC$ if $B=\\underline{\\pi }$ , $s-a =3$, $s-c =2$, then ",
      answers: {
        a: "$r=5/2$",
        b: "$\\mathit{\\Delta}=12$",
        c: "$r_1=2$",
        d: " $R=3$"
      },
      correctAnswer: "c"
    },
    {
      question: "If $\\alpha $ and $\\beta$ are the roots of $a(x^2-1)+2bx=0$ then, which one of the following are the roots of the same equation?",
      answers: {
        a: "$\\alpha +\\beta ,$ $\\alpha -\\beta $ ",
        b: "$2\\alpha +\\frac{1}{\\beta },$ $2\\beta +\\frac{1}{\\alpha }$",
        c: "$\\alpha +\\frac{1}{\\beta },$ $\\beta -\\frac{1}{\\alpha }$",
        d: "$\\alpha +\\frac{1}{2\\beta },$ $\\beta -\\frac{1}{2\\alpha }$"
      },
      correctAnswer: "a"
    },
    {
      question: "The solution of the equation ${\\mathrm{log}}_{cosx^2}(3-2x)<{\\mathrm{log}}_{cosx^2}(2x-1)$ is ",
      answers: {
        a: "$(1/2, 1)$",
        b: "$(-\\infty ,\\ 1)$",
        c: "$(1/2, 3)$",
        d: "$(1,\\ \\infty )-\\sqrt{2n\\pi },\\ n\\in N$"
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `You have solved ${numCorrect} out of ${myQuestions.length} questions correctly`;
  
  clearTimeout(myVar);

  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
//
$(document).ready(function(){


  //clearTimeout(myVar);

  $("#quiz_container").hide();

  $('#maths_challenge').click(function() {

    //buildQuiz();

    d = 0;
    $("#quiz_container").show();
    $("#maths_challenge").hide();

    


    console.log("hi");

  });

});

var myVar = setInterval(function() {
    myTimer()
    }, 1000);

    var d = 0;

    function myTimer() {
    document.getElementById("timer").innerHTML = " TIME  :  " + d++ +" sec";
    }

//
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();