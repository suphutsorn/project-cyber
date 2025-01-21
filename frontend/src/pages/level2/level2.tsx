import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './level2.css';
import Swal from 'sweetalert2';
import P from '/files/F12.jpg'
import A from '/files/B2.png'
import G from '/files/sam.jpg'
import { Level2Response, validateAnswerLevel2 } from '../../services/checkanswerlevel2';

const Level2: React.FC = () => {
    const [answer, setAnswer] = useState('');
    const [nextMessage, setNextMessage] = useState('');
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

    const handleSubmit = async () => {
        try {
            const response: Level2Response = await validateAnswerLevel2(answer);
            console.log(response.message);
            console.log(nextMessage);
            setNextMessage(response.message);

            // แสดง popup ทุกกรณี ไม่ว่าจะตอบถูกหรือผิด
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
                // ถ้าคำตอบถูกต้อง ให้นำทางไปที่ level5 หลังจากปิด popup
                if (response.correct) {
                    navigate('/5003746503edd054450b1ef5703449e11230c422d9a088dw');
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
                customClass: {
                    popup: 'custom-blue-border',
                    confirmButton: 'custom-ok-button',
                    icon: 'custom-icon-size'     
                  }
            });
        }
    };



    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            backgroundColor: '#000',
            color: '#00f',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'relative',
            alignItems: 'center'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Find Share Secret Number</h1>
            <div style={{
                fontSize: '5rem',
                marginBottom: '20px',
                position: 'fixed', // ใช้ fixed เพื่อให้อยู่ตำแหน่งคงที่บนหน้าจอ
                top: '20px', // ระยะจากด้านบน
                right: '20px', // ระยะจากด้านขวา
            }}>👨‍🍳</div>


            <div style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'yellow' }}>
                Ciphertext: "Fxatrwp rw Lxvydcna Nwprwnnarwp" && "Kyv gifwvjjfi fw kyzj jlsavtk"
            </div>
            <div style={{ fontSize: '1.0rem', marginBottom: '20px', color: 'orange' }}>
                (ชัดมากๆดูออกมั้ยนะ)
            </div>

            <div style={{
                fontSize: '1rem',
                marginBottom: '20px',
                color: 'black',
                display: 'flex',         // ใช้ flexbox เพื่อจัดเรียง
                justifyContent: 'center', // จัดให้อยู่กลาง
                alignItems: 'center',    // จัดแนวตั้งให้อยู่ตรงกลาง
                gap: '15px'              // ระยะห่างระหว่างภาพ
            }}> g^a mod p
            </div>

            <div style={{
                fontSize: '1.2rem',
                marginBottom: '20px',
                color: '#ff0',
                display: 'flex',         // ใช้ flexbox เพื่อจัดเรียง
                justifyContent: 'center', // จัดให้อยู่กลาง
                alignItems: 'center',    // จัดแนวตั้งให้อยู่ตรงกลาง
                gap: '15px'              // ระยะห่างระหว่างภาพ
            }}>
                <img src={P} alt="p" style={{ width: '100%', maxWidth: '350px' }} />
                <img src={G} alt="g" style={{ width: '100%', maxWidth: '350px' }} />
                <img src={A} alt="a" style={{ width: '100%', maxWidth: '360px' }} />
            </div>

            <div className="input-section2">
                <input
                    className="answer-input2"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button className="submit-button2" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            <div className="hint-text2">
                    hint: The answer is our language.
                </div>
        </div>
    );
};

export default Level2;
