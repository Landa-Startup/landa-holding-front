<<<<<<< HEAD
<<<<<<< HEAD
import Banner from '@/components/molecules/Banner';
import React from 'react';
=======
import AboutUsCooperation from '@/components/AboutUs/AboutUsCooperation';
import AboutUsLandaHolding from '@/components/AboutUs/AboutUsLandaHolding';
import AboutUsLandaHoldingHeader from '@/components/AboutUs/AboutUsLandaHoldingHeader';
import AboutUsProfile from '@/components/AboutUs/AboutUsProfile';
import Aboutuscart from '@/components/AboutUs/AboutUscard';
>>>>>>> feature/aboutus


import React from 'react';
export default function page() {

  const cards = [
    {
      title: "Investment Center",

      text: 'We assist startups by providing their investments to help them grow and transition their businesses into the business markets to expand them internationally.',
      teext: "We collaborate with a group of international investors who invest in various projects and businesses based on their investment priorities. ",
      ttext: "At Landa Investment Center, all the required investments for starting and developing your business will be provided, allowing you to prosper and achieve profitability  as soon as possible.",
      image: '/static/images/fc88e5340249e1ee02b7a4df655b1f2a.jpg',
      reverse: true,
    },
    {
      title: 'Acceleration Center',
      text: 'After completing the mentioned stages, the Landa Acceleration Center comes into action. This center has been established with the aim of accelerating your startup. The purpose of founding this center is to undertake all necessary actions for the growth and acceleration of your business until reaching ultimate success. One of the initial steps of the Landa Acceleration Center is analyzing and checking competitors. One of our initiatives at Landa Academy is creating a co-working space for both internal and external startups.',
      teext: " Our co-working space is designed to foster teamwork, allowing startups to collaborate directly with existing startups and also hold brainstorming sessions together for projects. ",
      image: '/static/images/e94305757ebd8c2acd7cdf62c895f401.jpg',
      reverse: false,
    },
    {
      title: 'Academy',
      text: "The first step after joining the Landa Academy is to discover each individual's interests. We believe that in order to progress, every person should take steps in their interested field, because pursuing one's passions always brings better results. ",
      teext: "With the help of our experienced and specialized staff, we can identify each person's interests and train them according to their passion.",
      ttext: " The most up-to-date method of education in the world is mentoring. This method of education is both theoretical and practical, providing specialized training to individuals based on their skills and interests. By selecting the best mentors, we offer the best education to teenagers. Additionally, after assessing their interests, teenagers can actively participate and gain experience in the relevant profession within our organization.",
      image: '/static/images/ee88829efb28ce5d1d32318949a34cce.jpg',
      reverse: true,
    },
  ];
  const headers = [
    {
      title: "L\u00A0A\u00A0N\u00A0D\u00A0A\u00A0\u00A0 \u00A0H\u00A0O\u00A0L\u00A0D\u00A0I\u00A0N\u00A0G",
      text: "About Us",
    }
  ]
  return (
    <div>
      {
        headers.map((header, index) => (
          <AboutUsLandaHoldingHeader
            title={header.title}
            image={header.image}
            text={header.text}
            key={index}
          />
        ))
      }
      <AboutUsLandaHolding />
      <AboutUsCooperation />
      <div className='bg-whiteGold md:mx-[25px] md:pb-32 pt-12'>


        {cards.map((cart, index) => (
          <Aboutuscart
         
            reverse={cart.reverse}
            key={index}
            text={cart.text}
            title={cart.title}
            image={cart.image}
            teext={cart.teext}
            ttext={cart.ttext}
          />
        ))}
      </div>

      <div>
        <AboutUsProfile
        

        />
      </div>
    </div>
  );
}
=======
import React from 'react';
import AboutUsCooperation from '@/components/molecules/AboutUsCooperation';
import AboutUsLandaHolding from '@/components/molecules/AboutUsLandaHolding';
import AboutUsLandaHoldingHeader from '@/components/molecules/AboutUsLandaHoldingHeader';
import AboutUsProfile from '@/components/molecules/AboutUsProfile';
import Aboutuscart from '@/components/molecules/AboutUscard';

export default function page() {

  const cards = [
    {
      title: "Investment Center",

      text: 'We assist startups by providing their investments to help them grow and transition their businesses into the business markets to expand them internationally.',
      teext: "We collaborate with a group of international investors who invest in various projects and businesses based on their investment priorities. ",
      ttext: "At Landa Investment Center, all the required investments for starting and developing your business will be provided, allowing you to prosper and achieve profitability  as soon as possible.",
      image: '/static/images/fc88e5340249e1ee02b7a4df655b1f2a.jpg',
      reverse: true,
    },
    {
      title: 'Acceleration Center',
      text: 'After completing the mentioned stages, the Landa Acceleration Center comes into action. This center has been established with the aim of accelerating your startup. The purpose of founding this center is to undertake all necessary actions for the growth and acceleration of your business until reaching ultimate success. One of the initial steps of the Landa Acceleration Center is analyzing and checking competitors. One of our initiatives at Landa Academy is creating a co-working space for both internal and external startups.',
      teext: " Our co-working space is designed to foster teamwork, allowing startups to collaborate directly with existing startups and also hold brainstorming sessions together for projects. ",
      image: '/static/images/e94305757ebd8c2acd7cdf62c895f401.jpg',
      reverse: false,
    },
    {
      title: 'Academy',
      text: "The first step after joining the Landa Academy is to discover each individual's interests. We believe that in order to progress, every person should take steps in their interested field, because pursuing one's passions always brings better results. ",
      teext: "With the help of our experienced and specialized staff, we can identify each person's interests and train them according to their passion.",
      ttext: " The most up-to-date method of education in the world is mentoring. This method of education is both theoretical and practical, providing specialized training to individuals based on their skills and interests. By selecting the best mentors, we offer the best education to teenagers. Additionally, after assessing their interests, teenagers can actively participate and gain experience in the relevant profession within our organization.",
      image: '/static/images/ee88829efb28ce5d1d32318949a34cce.jpg',
      reverse: true,
    },
  ];
  const headers = [
    {
      title: "L\u00A0A\u00A0N\u00A0D\u00A0A\u00A0\u00A0 \u00A0H\u00A0O\u00A0L\u00A0D\u00A0I\u00A0N\u00A0G",
      text: "About Us",
    }
  ]
  return (
    <div>
      {
        headers.map((header, index) => (
          <AboutUsLandaHoldingHeader
            title={header.title}
            image={header.image}
            text={header.text}
            key={index}
          />
        ))
      }
      <AboutUsLandaHolding />
      <AboutUsCooperation />
      <div className='bg-whiteGold md:mx-[25px] md:pb-32 pt-12'>
        {cards.map((cart, index) => (
          <Aboutuscart
            reverse={cart.reverse}
            key={index}
            text={cart.text}
            title={cart.title}
            image={cart.image}
            teext={cart.teext}
            ttext={cart.ttext}
          />
        ))}
      </div>

      <div>
        <AboutUsProfile


        />
      </div>
    </div>
  );
}
>>>>>>> 4b94b5c059788c11c3a4c1242c1d3eec6e9edfd4
