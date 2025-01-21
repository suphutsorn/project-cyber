import React, { useState } from "react";
import "./level5.css";
import { validateAnswerLevel5, Level5Response } from "../../services/checkanswerlevel5";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const Level5: React.FC = () => {
  const key = "2b7e151628aed2a6abf7158809cf4f3c";
  const iv = "000102030405060708090a0b0c0d0e0f";
 

  const [answer, setAnswer] = useState<string>("");
  const [nextMessage, setNextMessage] = useState<string>("");
  const [showKey, setShowKey] = useState<boolean>(false);
  const [showIV, setShowIV] = useState<boolean>(false);
  const navigate = useNavigate();



  const handleSubmit = async () => {
      if (answer.trim() === "") {
          setNextMessage("⚠️ Please enter an answer.");
          console.log(nextMessage)
          return;
      }
  
      try {
          const response: Level5Response = await validateAnswerLevel5(answer);
          setNextMessage(response.message);
  
          Swal.fire({
              title: response.correct ? 'Correct Answer' : 'Incorrect Answer',
              text: response.message,
              icon: response.correct ? 'success' : 'error',
              confirmButtonText: 'OK',
              customClass: {
                  popup: 'custom-blue-border',
                  confirmButton: 'custom-ok-button',
                  icon: 'custom-icon-size'
              }
          }).then((result) => {
              if (result.isConfirmed && response.correct) {
                  console.log("Proceeding to the next level...");
                  navigate('/260ada252gacaw55acscacf23accac74wa00csa598ecaf256efs');
              }
          });
  
      } catch (error) {
          setNextMessage((error as Error).message || "An error occurred.");
  
          Swal.fire({
              title: "Error",
              text: (error as Error).message || "An error occurred.",
              icon: "error",
              confirmButtonText: "OK",
          });
      }
  };
  return (
    <div className="container">
      <h1 className="title">
        <span className="highlight">Please help decode this</span>
      </h1>

      <div className="chef-emoji">👨‍🍳</div>

      <div className="emoji-buttons">
        <button className="emoji-button" onClick={() => setShowKey((prev) => !prev)}>
          🔑
        </button>
        <button className="emoji-button" onClick={() => setShowIV((prev) => !prev)}>
          🔒
        </button>
       
      </div>

      <div className="details-display">
        {showKey && (
          <p>
            <strong>🔑 Key:</strong> {key}
          </p>
        )}
        {showIV && (
          <p>
            <strong>🔒 IV:</strong> {iv}
          </p>
        )}
        
      </div>

      <div className="input-section">
        <input
          className="answer-input"
          type="text"
          placeholder="Enter your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Submit Answer
        </button>
      </div>

      
    </div>
  );
};
