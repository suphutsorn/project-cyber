import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Level3Response, validateAnswerLevel3 } from '../../services/checkanswerlevel3';
import './level3.css';

const Level3: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [nextMessage, setNextMessage] = useState('');
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

  const handleSubmit = async () => {
    try {
      const response: Level3Response = await validateAnswerLevel3(answer);
      console.log(response.message);
      console.log(nextMessage);
      setNextMessage(response.message);

      // แสดง popup ทุกกรณี ไม่ว่าจะตอบถูกหรือผิด
      Swal.fire({
        title: response.correct ? 'Correct Answer' : 'Incorrect Answer',
        text: response.message,
        icon: response.correct ? 'success' : 'error',
        confirmButtonText: 'OK',
      }).then(() => {
        // ถ้าคำตอบถูกต้อง ให้นำทางไปที่ level5 หลังจากปิด popup
        if (response.correct) {
          navigate('/006cc294a3f3688df73e08971f12f5e8');
        }
      });
    } catch (error) {
      const errorMessage = (error as Error).message || 'An error occurred while validating the answer.';
      setNextMessage(errorMessage);

      // แสดง popup เมื่อเกิดข้อผิดพลาด
      Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#000000', height: '100vh', position: 'relative', color: '#FFFFFF' }}>
      <h1 className="decode-title">Decode This</h1>
  
      {/* Hint Section */}
      <p className="hint-text">
        💡 Hint: We not that  <b>cruel </b> we have <b>Code file</b> for you <b>Find it</b> ✨
      </p>
  
      <div style={{
        position: 'absolute',
        top: '90%',
        left: '95%',
        fontSize: '30px',
        color: 'white',
      }}>p=61</div>
  
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '70%',
        fontSize: '70px',
        color: 'white',
      }}>q=53</div>
  
      <div style={{
        position: 'absolute',
        fontSize: '30px',
        color: 'white',
      }}>d=2753</div>
  
      <div style={{
        position: 'absolute',
        top: '60%',
        fontSize: '19px',
        color: 'white',
      }}>c=[2680, 2160, 2412, 1632, 2235, 1632, 2412, 1313, 1313, 2310, 2235, 3179, 2578, 1313, 2412, 1230, 3179, 884, 487, 1307, 1369, 2159, 1313, 281, 2170, 2235, 2185, 745, 2185, 2923, 487]</div>
  
      <div style={{
        position: 'absolute',
        top: '55%',
        fontSize: '19px',
        color: 'white',
      }}>c=[3123, 1632, 3179, 641, 2170, 1632, 3179, 1086, 2310, 2235, 3165, 1313, 1313]</div>
  
      <div style={{
        position: 'absolute',
        top: '65%',
        fontSize: '19px',
        color: 'white',
      }}>c=[3165, 2185, 884, 2159, 2170, 3179, 1230, 1307, 2235, 1313, 3165, 1632, 690, 1632]</div>
  
      {/* Download link */}
      <div className="download-link-container">
        <a
          href="/files/จะทำได้มั้ยทำได้รึป่าว.txt"
          download="จะทำได้มั้ยทำได้รึป่าว.txt"
          className="download-link"
        >
          Download File
        </a>
      </div>
  
      <div className="input-section3">
        <input
          className="answer-input3"
          type="text"
          placeholder="Enter your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button className="submit-button3" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
  
  
};

export default Level3;
