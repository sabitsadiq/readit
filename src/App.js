import React, { useState } from "react";
import "./App.css";

function App() {
  const [showQuestion, setShowQuestion] = useState(false);
  // showQuestion start
  const buttonClick = (clicked) => {
    setShowQuestion(!showQuestion);
    return showQuestion;
  };
  // showQuestion
  return (
    <div className="App">
      {showQuestion ? (
        /* 2: question section */
        <div className="quiz-card">
          <h1>Question:1</h1>
          <p>How many local government are in Abuja ?</p>
          <ul>
            <li>
              <input type="radio" /> a 2
            </li>
            <li>
              <input type="radio" /> b 6
            </li>
            <li>
              <input type="radio" /> c 7
            </li>
            <li>
              <input type="radio" /> d 4
            </li>
          </ul>
        </div> /* 1:form section */
      ) : (
        <form className="formCard">
          <div className="formText">
            <div className="quiz-name">
              <h1>Current Affairs Summer Quiz.</h1>
            </div>
            <div className="description">
              <label>
                <h2>Description:</h2>
              </label>
              <p>
                1: Summer Quiz is an annual quiz organised by thabitex.org to
                grant a summer trip award to 30 participant,who got an average
                score of 80% in the quiz.
              </p>
              <p>2: The quiz contain 15 multiple choose questions.</p>
              <p>3: Equal score is allocated to each question.</p>
              <h2>Duration:</h2>
              <p>the quiz will last for 20 minutes.</p>
              <h2>Note:</h2>
              <p>1: Ensure you're in well lightened room.</p>
              <p>2: The room should be free from noise.</p>
              <p>3: Ensure you have a stable internet connection.</p>
            </div>
            <button className="btn" onClick={buttonClick}>
              TAKE QUIZ
            </button>
          </div>
        </form>
      )}

      {/* 3: final-result */}
      {/* <div className="result-card">
        <h2>score:</h2>
        <p>Your total score is :1 out of 15.</p>
        <button>Print result</button>
      </div> */}
    </div>
  );
}

export default App;
