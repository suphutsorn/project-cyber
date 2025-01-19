import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindShareSecretNumber: React.FC = () => {
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (answer.trim()) {
            navigate('/Level3'); // Navigate to level3 page
        } else {
            alert('Please enter your answer before submitting.');
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
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Find Share Secret Number</h1>
            <div style={{ fontSize: '5rem', marginBottom: '20px' }}>👨‍🍳</div>

            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer"
                style={{
                    padding: '10px',
                    fontSize: '1.2rem',
                    width: '300px',
                    marginBottom: '20px',
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
    );
};

export default FindShareSecretNumber;
