/* eslint-disable react/prop-types */

import "./MVPCard.css";

const MVPCard = (props) => {
  const className = `${props.shadow} z-0 relative flex flex-col gap-5 items-center my-7 text-center mb-14 card w-[17rem] h-[17rem] autox  border `;
  const className2 = ` ${props.color} p-2 text-md w-full text-center flex justify-center gap-5 font1  avg`;

  return (
    <div className={className}>
      <img src={props.img} className="w-full min-h-full" />
      <span className="text-white text-2xl absolute top-[93.5%] left-[20%] ">
        {props.player}
      </span>
      <div className={className2}>
        <span>PPG : {props.ppg}</span>
        <span>RPG : {props.rpg}</span>
        <span>APG : {props.apg}</span>
      </div>
    </div>
  );
};

export default MVPCard;
