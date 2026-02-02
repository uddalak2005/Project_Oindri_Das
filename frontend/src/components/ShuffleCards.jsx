import React, { useState, useEffect } from 'react';

const ShuffleCards = () => {
    const [activeCard, setActiveCard] = useState(0);

    const cards = [
        {
            icon: 'psychology',
            title: 'Psychology',
            description: 'Research & Analysis',
            bgColor: '#81adc8',
            iconColor: '#fff8f0',
            textColor: '#fff8f0'
        },
        {
            icon: 'music_note',
            title: 'Dance',
            description: 'Expression & Art',
            bgColor: '#f07167',
            iconColor: '#fff8f0',
            textColor: '#fff8f0'
        },
        {
            icon: 'school',
            title: 'Research',
            description: 'Academic Excellence',
            bgColor: '#548c2f',
            iconColor: '#fff8f0',
            textColor: '#fff8f0'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % cards.length); // Use cards.length
        }, 3000);

        return () => clearInterval(interval);
    }, [cards.length]); // Add cards.length to dependency

    return (
        <div className="rounded-3xl flex items-center justify-center p-6 text-center relative overflow-hidden h-full">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700 ease-in-out rounded-3xl ${activeCard === index
                        ? 'opacity-100 translate-y-0 scale-100 z-10'
                        : 'opacity-0 translate-y-8 scale-95 pointer-events-none z-0'
                        }`}
                    style={{ backgroundColor: card.bgColor }}
                >
                    <span
                        className="material-symbols-outlined text-6xl mb-3"
                        style={{ color: card.iconColor }}
                    >
                        {card.icon}
                    </span>
                    <h3 className="text-xl font-bold satoshi mb-2" style={{ color: card.textColor }}>{card.title}</h3>
                    <p className="text-sm text-gray-600 zalando-sans" style={{ color: card.textColor }}>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ShuffleCards;