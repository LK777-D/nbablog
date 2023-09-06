/* eslint-disable react/prop-types */
const Showcase = (props) => {
  const className = `${props.bg} w-11/12 h-52 autox rounded-md flex items-center justify-center text-center `;

  return (
    <div className={className}>
      <h1 className="text-white text-3xl md:text-5xl ">{props.text}</h1>
    </div>
  );
};

export default Showcase;
