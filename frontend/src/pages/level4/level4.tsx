import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { validateAnswerlevel4, AnswerResponse } from '../../services/checkanswerlevel4';
import Swal from 'sweetalert2';

const DownloadPage: React.FC = () => {
    const [answer, setAnswer] = useState('');
    const [nextMessage, setNextMessage] = useState('');
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

    const handleDownload = async () => {
        try {
            const zip = new JSZip();

            const folder = zip.folder("images");
            if (folder) {
                const imagePaths = [
                    { name: "NDA0MQ==.jpg", path: "/files/NDA0MQ==.jpg" },
                    { name: "Rm9vbGVkQWdhaW4h.jpeg", path: "/files/Rm9vbGVkQWdhaW4h.jpeg" },
                    { name: "RU5HMjM=.png", path: "/files/RU5HMjM=.png" },
                    { name: "VGhpc0lzTm90QW5zd2Vy.jpeg", path: "/files/VGhpc0lzTm90QW5zd2Vy.jpeg" },
                    { name: "VWgtT2ghTm90VGhpc09uZQ==.png", path: "/files/VWgtT2ghTm90VGhpc09uZQ==.png" }
                ];

                for (const image of imagePaths) {
                    const response = await fetch(image.path);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${image.path}: ${response.statusText}`);
                    }
                    folder.file(image.name, await response.blob());
                }
            }

            const content = await zip.generateAsync({ type: "blob" });
            saveAs(content, "images.zip");
        } catch (error) {
            console.error("Error creating ZIP file:", error);
            alert("An error occurred while downloading the images. Please try again.");
        }
    };

    // const handleSubmit = async () => {
    //     try {
    //         const response: AnswerResponse = await validateAnswerlevel4(answer);
    //         setNextMessage(response.message);

    //         // ถ้าคำตอบถูกต้อง นำทางไปที่ level5
    //         if (response.correct) {
    //             navigate('/5003746503edd054450b1ef5703449e11230c420d0be521e80936ddfa1e9e6ad');
    //         }
    //     } catch (error) {
    //         setNextMessage((error as Error).message || 'An error occurred while validating the answer.');
    //     }
    // };

     const handleSubmit = async () => {
        try {
            const response: AnswerResponse = await validateAnswerlevel4(answer);
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
              navigate('/5003746503edd054450b1ef5703449e11230c420d0be521e80936ddfa1e9e6ad');
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
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', margin: '50px' }}>
            <h1 style={{ color: '#031fc1' }}>Download Your Images</h1>
            <p>Click the button below to download all images as a ZIP file.</p>

            <div style={{ marginTop: '30px' }}>
                <button
                    onClick={handleDownload}
                    style={{
                        padding: '10px 25px',
                        fontSize: '1.2rem',
                        color: '#fff',
                        background: 'linear-gradient(to bottom, #005792, #0077b6)',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        margin: '60',
                    }}
                >
                    Download ZIP
                </button>
            </div>

            {/* เพิ่มรูปภาพ */}
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <img
                    src="/files/ช่องปีบ1.jpeg"
                    alt="รูป 1"
                    style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <img
                    src="/files/ดอกปีบ2.jpeg"
                    alt="รูป 2"
                    style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                />
            </div>

            {/* ช่องตอบคำตอบ */}
            <div className="input-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', marginTop: '30px' }}>
                <input
                    className="answer-input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    style={{
                        padding: '10px',
                        width: '350px',
                        border: '2px solid #112d4e',
                        borderRadius: '5px',
                        background: '#1b262c',
                        color: '#fff',
                        fontSize: '1rem',
                        textAlign: 'center',
                    }}
                />
                <button
                    className="submit-button"
                    onClick={handleSubmit}
                    style={{
                        padding: '10px 25px',
                        fontSize: '1.2rem',
                        color: '#fff',
                        background: 'linear-gradient(to bottom, #005792, #0077b6)',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        margin: '60',
                    }}
                >
                    Submit Answer
                </button>
            </div>

            {nextMessage && (
                <div className="next-message" style={{ marginTop: '20px', fontSize: '1.2rem', color: '#ff0000', textShadow: '1px 1px 4px #000000' }}>
                    {nextMessage}
                </div>
            )}
        </div>
    );
};

export default DownloadPage;
