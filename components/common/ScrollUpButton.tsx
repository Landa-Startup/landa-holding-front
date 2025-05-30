'use client';
import React, { useState, useEffect } from 'react';
import FeatherArrowUp from '../icons/common/FeatherArrowUp';

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
    const documentHeight = document.documentElement.scrollHeight; // Use documentElement to get full document height
    const maxScroll = documentHeight - windowHeight;
    const progress = (scrollY / maxScroll) * 100;
    setScrollProgress(Math.min(progress, 100)); // Cap progress at 100%
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
      } fixed bottom-4 right-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white border-primary text-primary`}
      style={{
        background: showButton
          ? `conic-gradient(from 90deg, #f5e9da 0% ${scrollProgress}%, transparent ${scrollProgress}% 100%)`
          : ''
      }}
    >
      <FeatherArrowUp />
    </button>
  );
};

export default ScrollUpButton;
