import React, { useEffect, useState } from 'react';

const About = () => {
    const [text, setText] = useState('');
    const fullText = "Welcome to My Portfolio!";
    let index = 0; // This should be inside the useEffect to keep its value scoped

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setText(prev => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Adjust typing speed here

        return () => clearInterval(typingInterval); // Cleanup on unmount
    }, [fullText]); // Add fullText as a dependency

    return (
        <div className="typing-container">
            <h1>
                {text}
                {/* Show caret only while typing */}
                {text.length < fullText.length && <span className="caret">|</span>}
            </h1>
            <style jsx>{`
                .typing-container {
                    white-space: nowrap;
                    overflow: hidden;
                }

                .caret {
                    border-right: 2px solid #333;
                    animation: blink 0.75s step-end infinite;
                }

                @keyframes blink {
                    50% { border-color: transparent; }
                }
            `}</style>
        </div>
    );
};

export default About;
