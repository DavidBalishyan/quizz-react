import React, { useState } from "react";
import questions from "./questions";
import 'bootstrap/dist/css/bootstrap.min.css'

document.title = "Quizz game"

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <br/>
          Refresh to restart
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button className="btn btn-outline-primary" key={index} onClick={() => handleAnswerOptionClick(option.isCorrect)}>
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
