import React, { useState, useEffect } from 'react';
// import './Carousel.css';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        'Slide 1 Content',
        'Slide 2 Content',
        'Slide 3 Content'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="carousel">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                    {slide}
                </div>
            ))}
        </div>
    );
};

export default Carousel;