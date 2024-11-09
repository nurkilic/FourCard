import React from "react";

const Card = ({ header, comment, icon, color }) => {
  return (
    <>
    
    <div
      
      className="relative w-64 max-sm:mx-5 min-w-40 max-sm:w-full min-h-44  p-5 shadow-lg rounded-md rounded-t-none  flex flex-col justify-between "
    >
      <div className="h-[3px] w-full rounded-t-full px-2 absolute -top-1 left-0 border border-b-transparent border-solid" style={{ backgroundColor: color }}></div>
      <div>
        <h3 className="text-[var(--very-dark-blue)] font-semibold">{header}</h3>
        <p className="text-[var(--grayish-blue)] text-xs">{comment}</p>
      </div>
      <div>
        <img className="ml-auto" src={icon} alt="" />
      </div>
    </div>
    </>
  );
};

export default Card;
