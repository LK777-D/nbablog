import "./Alert.css";
/* eslint-disable react/prop-types */
const Alert = (props) => {
  return (
    <div className="bg-red-700 appear text-zinc-300 w-full p-5 text-center autox  sticky top-[5rem] z-10 left-0 ">
      <span>{props.text}</span>
    </div>
  );
};

export default Alert;
