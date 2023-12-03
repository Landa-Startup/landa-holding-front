import React from 'react';
import FeaturesCards from './FeaturesCards';

export default function FeaturesCardsContainer() {
  const featuresCardsData = [
    {
      link: '/StartupsForm?type=IDEA',
      title: '1. Idea',
      description:
        'Present your idea and identify the best opportunity for success, plan your path to launch and precisely set the steps, and find the right team of experts to help you take the steps one after another. Remember that the first step is the longest stride. You must remember to validate the profitability of your idea because low profitability and high investment risks lead to failure.',
    },
    {
      link: '/StartupsForm?type=MVP',
      title: '2. MVP (minimum viable product)',
      description:
        "MVP is a version of a product with just enough features to be usable by early customers who can then provide feedback for future product development. This way, you are able to create the tangible product that provides the best and most appealing user experience for the most economical cost, an that can challenge and validate assumptions about a product's requirements.",
    },
    {
      link: '/StartupsForm?type=FisrtSale',
      title: '3. First Sale',
      description:
        'In business, product development (PD) covers the complete process of bringing a new product to market, renewing an existing product and introducing a product in a new market. You need to create a brand that helps you stand out from competitors by connecting with the values and emotions of your target customer. Among various business considerations, product design and the transformation into a product available for sale, and finally the means for it to generate income are the most important factors.',
    },
    {
      link: '/StartupsForm?type=SaleDevelopment',
      title: '4. Sale Development',
      description:
        "Collaborate with manufacturers to ensure a high quality product delivered to buyers' doors that exceeds customer expectations. Sales development is usually an organization that sits between the marketing and sales functions of a business and is responsible for the front-end of the sales cycle including identifying, connecting with, and qualifying leads. They normally set up qualified meetings between a salesperson and potential buyers with a high probability of purchasing a product.",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
      {featuresCardsData.map((card, index) => (
        <FeaturesCards
          key={index}
          link={card.link}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
