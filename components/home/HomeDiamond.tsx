// import React from 'react';
// import './HomeDiamond.css'; // You'll need to create this CSS file

// const Diamond = () => {
//   return (
//     <div className="diamond">
//       <div className="top"></div>
//       <div className="bottom"></div>
//     </div>
//   );
// };

// export default Diamond;
import React, { useState } from 'react';
import './HomeDiamond.css'; // Import your CSS file

const HomeDiamond: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const animationClass = isHovered ? 'animate' : '';

  return (
    <div
      className={`rhombus ${animationClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
    </div>
  );
};

export default HomeDiamond;
