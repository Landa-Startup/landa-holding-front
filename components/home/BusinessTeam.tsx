'use client';
// import Image from 'next/image';
import React, { useState } from 'react';
import Chevron from '../common/Chevron';
// import Link from 'next/link';
import BusinessTeamCard from './BusinessTeamCard';
import { useTranslation } from 'app/i18n';

export default function AerialViewBusinessTeam(
  {lang} : {lang: string}
) {
  const commentsData = [
    {
      "name": "Morteza Jafari",
      "roleInCompany": "Founder of IRimmigration",
      "role": "Investor",
      "profileImage": "b669e3cb2e3c18d8ff0ec2b8216c00c1.jpg",
      "commentDescription":
        "The specialized and skilled staff at Landa Holding made short work on the issues that had been preventing me from advancing in my career.",
      "linkedinLink": "https://www.linkedin.com/in/johndoe",
      "personalWebsite": "https://www.johndoe.com",
      "email": "john.doe@example.com",
    },
    {
      "name": "Jane Doe",
      "roleInCompany": "Product Manager",
      "role": "Product Lead",
      "profileImage": "b669e3cb2e3c18d8ff0ec2b8216c00c1.jpg",
      "commentDescription":
        "For me, my time spent working with Landa Holdings with this extremely competent staff was an experience that I will never forget.",
      "linkedinLink": "https://www.linkedin.com/in/janedoe",
      "personalWebsite": "https://www.janedoe.com",
      "email": "jane.doe@example.com",
    },
    {
      "name": "Bob Smith",
      "roleInCompany": "UX Designer",
      "role": "Design Lead",
      "profileImage": "b669e3cb2e3c18d8ff0ec2b8216c00c1.jpg",
      "commentDescription":
        "Landa Holding is home to a youthful and inventive workforce that is brimming with enthusiasm for all they do.",
      "linkedinLink": "https://www.linkedin.com/in/bobsmith",
      "personalWebsite": "https://www.bobsmith.com",
      "email": "bob.smith@example.com",
    },
  ];

  // const { t } = await useTranslation(lang, "mainPage")

  // console.log(t('LandaHolding'))

  const LangChangeHandle = async (lang: string) => {
    const { t } = await useTranslation(lang, "mainPage")

    return t;
  } 

  const translated = LangChangeHandle(lang);

  const title = translated.then((res) => {
    const LandaHolding = res('LandaHolding')

    return LandaHolding
  }).then((res) => {
    return res
  })

  const text = translated.then((res) => {
    const text = res('businessTeamText')

    return text
  }).then((res) => {
    return res
  })

  const [currentIndex, setCurrentIndex] = useState(0);

  // const startAutoChange = () => {
  //   const updateIndex = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex < commentsData.length - 1 ? prevIndex + 1 : 0
  //     );

  //     // Set a timeout for the next update after 5 seconds
  //     setTimeout(updateIndex, 5000);
  //   };

  //   // Start the recursive update
  //   updateIndex();
  // };

  // // Start auto change when the component mounts
  // React.useEffect(() => {
  //   startAutoChange();

  //   // Cleanup (no need for clearInterval in this case)
  // }, []);

  const handleLeftChevronClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : commentsData.length - 1
    );
  };

  const handleRightChevronClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < commentsData.length - 1 ? prevIndex + 1 : 0
    );
  };
  const handleCommentsNavigationClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('/static/images/Home/Cooperation-members/Office.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="business-team flex flex-col items-center justify-center py-5 md:h-[598px]"
    >
      <div className="pb-5 text-center font-condensed ltr:tracking-[3.75px] ltr:md:tracking-[7px]">
        <div className="flex flex-col space-y-2 md:mb-5 md:space-y-7">
          <span className="text-base font-normal text-white md:text-xl">
            {/* {LandaHoldingText.then((res) => (
              <>{res}</>
            ))} */}
            {title}
            <br />
          </span>
          <span className="text-base font-normal text-white md:text-[30px]">
            {/* {cooprationText.then((res) => (
              <>{res}</>
            ))} */}
            {text}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center md:gap-1">
        <Chevron direction="left" onClick={handleLeftChevronClick} />
        <div className="flex w-[340px] flex-col items-center justify-between p-5 backdrop-blur-2xl md:h-[360px] md:w-[750px]">
          <BusinessTeamCard
            name={commentsData[currentIndex].name}
            roleInCompany={commentsData[currentIndex].roleInCompany}
            role={commentsData[currentIndex].role}
            profileImage={commentsData[currentIndex].profileImage}
            linkedinLink={commentsData[currentIndex].linkedinLink}
            email={commentsData[currentIndex].email}
            personalWebsite={commentsData[currentIndex].personalWebsite}
            commentDescription={commentsData[currentIndex].commentDescription}
          />

          <div className="mt-5 inline-flex items-start justify-start gap-[12px] md:gap-[19px]">
            {commentsData.map((_, index) => (
              <button
                key={index}
                aria-label={`Comments Navigation ${index + 1}`}
                className={`h-[10px] w-[10px] rounded-full md:h-[15px] md:w-[15px] ${
                  currentIndex === index
                    ? 'bg-primary transition-all duration-300'
                    : 'border border-white transition-all duration-300'
                }`}
                onClick={() => handleCommentsNavigationClick(index)}
              />
            ))}
          </div>
          <div className="h-[0px]border w-[283.01px] border-white"></div>
        </div>
        <Chevron direction="right" onClick={handleRightChevronClick} />
      </div>
    </div>
  );
}