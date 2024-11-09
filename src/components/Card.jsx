import React from "react";

const Card = ({ header, comment, icon, color }) => {
  return (
    <div
      style={{ borderTopColor: color }}
      className="w-64 max-sm:mx-5 min-w-40 max-sm:w-full min-h-44  p-5 shadow-lg rounded-md  flex flex-col justify-between  border-[3px] border-solid"
    >
      <div>
        <h3 className="text-[var(--very-dark-blue)] font-semibold">{header}</h3>
        <p className="text-[var(--grayish-blue)] text-xs">{comment}</p>
      </div>
      <div>
        <img className="ml-auto" src={icon} alt="" />
      </div>
    </div>
  );
};

export default Card;
