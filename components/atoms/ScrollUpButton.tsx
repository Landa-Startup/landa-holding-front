'use client';
import React, { useState, useEffect } from 'react';

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }

    // Calculate the scroll progress relative to the maximum scroll distance
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const maxScroll = documentHeight - windowHeight;
    const progress = (scrollY / maxScroll) * 100;
    setScrollProgress(Math.min(progress, 100)); // Cap progress at 100%
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-up-btn ${
        showButton ? 'show' : 'hidden'
      } fixed w-12 h-12 rounded-full border border-primary text-primary flex justify-center items-center right-10 bottom-4`}
      style={{
        background: showButton
          ? `conic-gradient(from 90deg, #f5e9da 0% ${scrollProgress}%, transparent ${scrollProgress}% 100%)`
          : '',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up w-6 h-6"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
};

export default ScrollUpButton;
