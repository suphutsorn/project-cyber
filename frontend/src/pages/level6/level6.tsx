import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './level6.css';
import { Level6Response, validateAnswerLevel6 } from '../../services/checkanswerlevel6';

        const Level6: React.FC = () => {
            const [answer, setAnswer] = useState('');
            const [nextMessage, setNextMessage] = useState('');
            const navigate = useNavigate();

            const handleSubmit = async () => {
                try {
                    const response: Level6Response= await validateAnswerLevel6(answer);
                    console.log(response.message);
                    console.log(nextMessage);
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
                    }).then(() => {
                        if (response.correct) {
                            navigate('/end');
                        }
                    });
                } catch (error) {
                    const errorMessage = (error as Error).message || 'An error occurred while validating the answer.';
                    setNextMessage(errorMessage);

                    Swal.fire({
                        title: 'Error',
                        text: errorMessage,
                        icon: 'error',
                        confirmButtonText: 'OK',
                        customClass: {
                            popup: 'custom-blue-border',
                            confirmButton: 'custom-ok-button',
                            icon: 'custom-icon-size'     
                          }
                    });
                }
            };

            return (
                <div style={{ backgroundColor: '#000000', height: '100vh', position: 'relative', color: '#FFFFFF' }}>
                    <h1 className="decode-title">From what you got guess it !</h1>
                    <p className="hint-text">
                    💡 Hint: Have 2 <b>words </b>begin with <b>Capital letter</b>✨
                    </p>
                <div className="level6-container">
                {/* ก้อนที่ 1: 3 รูปเรียงกัน */}
                <div className="image-group1">
                    <img src="/files/Level1.jpg" alt="Image 1" className="grid-image6" />
                    <img src="/files/Level2.png" alt="Image 2" className="grid-image6" />
                    <img src="/files/Level3.jpg" alt="Image 3" className="grid-image6" />
                </div>
            
                {/* ก้อนที่ 2: 2 รูปเรียงกัน */}
                <div className="image-group2">
                    <img src="/files/Level4.png" alt="Image 4" className="grid-image6" />
                    <img src="/files/Level5.jpg" alt="Image 5" className="grid-image6" />
                </div>

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
                            Submit Answer
                        </button>
                    </div>
                </div>
                </div>
            );
        };

        export default Level6;
