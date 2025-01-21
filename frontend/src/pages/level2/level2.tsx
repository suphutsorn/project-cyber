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
            {/* <div style={{ fontSize: '5rem', marginBottom: '20px' }}>👨‍🍳</div> */}


            <div style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'yellow' }}>
                Ciphertext: "Fxatrwp rw Lxvydcna Nwprwnnarwp" && "Cqn yaxonbbxa xo cqrb bdksnlc"
            </div>
            <div style={{ fontSize: '1.0rem', marginBottom: '20px', color: 'orange' }}>
                (ชัดมากๆดูออกมั้ยนะ)
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

            <div
                style={{
                    display: 'flex', // ใช้ flexbox สำหรับจัดเรียง
                    justifyContent: 'center', // จัดให้อยู่กลางในแนวนอน
                    alignItems: 'center', // จัดให้อยู่กลางในแนวตั้ง
                    gap: '10px', // ระยะห่างระหว่าง input และปุ่ม
                    marginBottom: '20px'
                }}
            >
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    style={{
                        padding: '10px',
                        fontSize: '1.2rem',
                        width: '300px',
                        border: '2px solid #00f',
                        borderRadius: '5px',
                        backgroundColor: '#222',
                        color: '#fff'
                    }}
                />

                <button
                    onClick={handleSubmit}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1.2rem',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: '#00f',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                >
                    Submit
                </button>
            </div>
            <div style={{ fontSize: '1.0rem', marginBottom: '20px', color: 'red' }}>
                hint: The answer is our language.
            </div>

        </div>
    );
};

export default Level2;
