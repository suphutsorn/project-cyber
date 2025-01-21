import React, { useState } from 'react';
//import { validateAnswer, AnswerResponse } from './services/checkanswerlevel1.tsx'; // Import service
import { validateAnswer, AnswerResponse } from '../../services/checkanswerlevel1';
const Level1: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State สำหรับแสดง popup
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State สำหรับ error message

  const handleSubmit = async () => {
    try {
      const result: AnswerResponse = await validateAnswer(answer); // เรียกใช้ service เพื่อตรวจคำตอบ
      if (result.correct) {
        setShowPopup(true); // แสดง popup
        setTimeout(() => setShowPopup(false), 2000); // ซ่อน popup หลังจาก 2 วินาที
      } else {
        setErrorMessage(result.message); // แสดงข้อความ error จาก backend
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'เกิดข้อผิดพลาด โปรดลองอีกครั้ง!');
    }
  };

  return (
    
    <div style={{ backgroundColor: '#000000', height: '100vh', position: 'relative', color: '#FFFFFF' }}>
      {/* Hidden word "cyber" */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '100px',
        color: '#000000',
        opacity: 0.3,
      }}>hacker</div>

    <div style={{
        position: 'absolute',
        top: '60%',
        left: '40%',
        transform: 'translate(-50%, -50%)',
        fontSize: '100px',
        color: '#000000',
        opacity: 0.3,
      }}>CPE</div>

    <div style={{
        position: 'absolute',
        top: '70%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        fontSize: '100px',
        color: '#000000',
        opacity: 0.3,
      }}>40f5ae3573755d178953b3b203dfa5bf</div>

    {/* <div style={{
        position: 'absolute',
        top: '80%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        fontSize: '100px',
        color: '#000000',
        opacity: 0.3,
      }}>c398e5e2e45a4aa3988b867a7537fcf8c4fbeff99d2a654d0026d6e0b25fc8aa</div> */}

<div style={{
        position: 'absolute',
        top: '85%',
        left: '15%',
        transform: 'translate(-50%, -50%)',
        fontSize: '100px',
        color: '#000000',
        opacity: 0.3,
      }}>about path ⬆</div> 



 <div style={{
        position: 'absolute',
        top: '45%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
        fontSize: '100px',
        color: '#000000',
        opacity: 0.3,
      }}>01d906f42732a0a06ac9d187e5e5693b</div>

<div style={{
        position: 'absolute',
        top: '20%',
        left: '80%',
        transform: 'translate(-50%, -50%)',
        fontSize: '100px',
        color: '#000000',
        opacity: 0.3,
      }}>e7aca8248896a61922065d6e412e7f2d</div> 



      {/* Popup */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#333333',
            color: '#FFFFFF',
            padding: '20px',
            border: '1px solid #555555',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>มาถูกแล้ว อีกนิดเดียว!</p>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div
          style={{
            color: '#FF4136',
            position: 'absolute',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {errorMessage}
        </div>
      )}

      {/* Input และปุ่ม */}
      <div className="input-section6">
                        <input
                            className="answer-input6"
                            type="text"
                            placeholder="Enter your answer"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                        <button className="submit-button6" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            
    
  );
};

export default Level1;
