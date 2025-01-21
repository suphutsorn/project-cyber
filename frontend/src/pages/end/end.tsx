import React, { useEffect } from 'react';

const End: React.FC = () => {
    useEffect(() => {
        // Play the clapping sound when the component is rendered
        const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
        audio.play();
        
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#000',
                color: '#fff',
            }}
        >
            <div
                style={{
                    animation: 'expand 3s infinite', // Animation to expand the emoji
                    fontSize: '25rem', // Initial size of the emoji
                }}
            >
                <div>🏆</div>
            </div>

            {/* Define the animation using inline CSS */}
            <style>
                {`
                    @keyframes expand {
                        0% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.5);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default End;
