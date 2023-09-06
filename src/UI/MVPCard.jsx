/* eslint-disable react/prop-types */

import "./MVPCard.css";

const MVPCard = (props) => {
  const className = `${props.shadow} relative flex flex-col gap-2 text-center mb-14 card w-[17rem] h-[17rem] autox  border `;

  return (
    <div className={className}>
      <img src={props.img} className="w-full h-full" />
      <span className="text-white text-2xl absolute top-[93.5%] left-[20%] ">
        {props.player}
      </span>
    </div>
  );
};

export default MVPCard;
