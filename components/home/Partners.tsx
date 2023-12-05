'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../common/Button';
import PartnersDiamondsContainer from './PartnersDiamondsContainer';
import PartnersStartupCard from './PartnersStartupCard';

export default function Partners() {
  const logos = [
    {
      number: 2,
      title: 'Islamic Azad University of Isfahan(Khorasgan)',
      description:
        'Since 1396, at the same time as Farazman was established, we have been working with Isfahan Azad University in the field of student investment and acceleration.',
      alt: 'Islamic Azad University of Isfahan(Khorasgan)',
    },
    {
      number: 3,
      title: 'Dr. Nekui Educational Holding',
      description:
        'We are proud to cooperate with the educational holding of Dr. Nekui Academy of Business and Investment in the field of youth startups and we are moving forward for a bright future of youth startups and ideas.',
      alt: 'Dr. Nekui Educational Holding',
    },
    {
      number: 4,
      title: 'University of Kashan',
      description:
        'Since 1399, we started cooperating with Kashan University in the field of acceleration center',
      alt: 'University of Kashan',
    },
    {
      number: 7,
      title: 'ASIAHITECH',
      description:
        'Since 1397, we are proud to cooperate with the advanced technologies of Asia in the field of investing in startups.',
      alt: 'ASIAHITECH',
    },
    {
      number: 8,
      title: 'Chamber of Commerce, Industries, Mines and Agriculture',
      description:
        'We have been cooperating with the Isfahan Chamber of Commerce for 4 months in the field of startup investment.',
      alt: 'Chamber of Commerce, Industries, Mines and Agriculture',
    },
    {
      number: 2,
      title: 'Islamic Azad University of Isfahan(Khorasgan)',
      description:
        'Since 1396, at the same time as Farazman was established, we have been working with Isfahan Azad University in the field of student investment and acceleration.',
      alt: 'Islamic Azad University of Isfahan(Khorasgan)',
    },
    {
      number: 3,
      title: 'Dr. Nekui Educational Holding',
      description:
        'We are proud to cooperate with the educational holding of Dr. Nekui Academy of Business and Investment in the field of youth startups and we are moving forward for a bright future of youth startups and ideas.',
      alt: 'Dr. Nekui Educational Holding',
    },
    {
      number: 4,
      title: 'University of Kashan',
      description:
        'Since 1399, we started cooperating with Kashan University in the field of acceleration center',
      alt: 'University of Kashan',
    },
    {
      number: 7,
      title: 'ASIAHITECH',
      description:
        'Since 1397, we are proud to cooperate with the advanced technologies of Asia in the field of investing in startups.',
      alt: 'ASIAHITECH',
    },
    {
      number: 8,
      title: 'Chamber of Commerce, Industries, Mines and Agriculture',
      description:
        'We have been cooperating with the Isfahan Chamber of Commerce for 4 months in the field of startup investment.',
      alt: 'Chamber of Commerce, Industries, Mines and Agriculture',
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    function scrollAutomatically() {
      const scrollSpeed = 50; // Adjust this value to control the scroll speed.
      const scrollAmount = 1;
      if (scrollContainer != null && isScrolling) {
        // Check if scrolling is allowed
        const isScrollingLeft = scrollContainer.scrollLeft > 0;

        if (!isScrollingLeft) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth;
        } else {
          scrollContainer.scrollLeft -= scrollAmount;
        }
      }
    }

    const intervalId = setInterval(scrollAutomatically, 50); // Adjust the interval as needed.

    return () => clearInterval(intervalId);
  }, [isScrolling]);

  // Add event listeners to stop automatic scroll on mouse enter
  const handleMouseEnter = () => {
    setIsScrolling(false); // Stop scrolling
  };

  // Add event listener to resume automatic scroll on mouse leave
  const handleMouseLeave = () => {
    setIsScrolling(true); // Resume scrolling
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;

    if (scrollContainerRef.current) {
      const x = e.clientX;
      const walk = (x - startX) * 1; // You can adjust the factor for smoother or faster scrolling
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="flex flex-col items-center my-6 gap-12">
      <span className="text-3xl md:text-4xl text-primary">
        Join Our Business Affiliates
      </span>
      <div
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="overflow-x-scroll md:overflow-x-hidden gap-12 grid grid-flow-col w-[calc(100%-2%)] cursor-pointer"
      >
        {logos.map((logo) => (
          <PartnersStartupCard
            key={logo.number}
            logo={logo.number}
            title={logo.title}
            description={logo.description}
          />
        ))}
      </div>
      <Button
        goto="/partner-membership"
        size="visit"
        text="JOIN US"
        bgColor="Primary"
      />
    </div>
  );
}