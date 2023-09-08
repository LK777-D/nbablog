import ReactDOM from "react-dom";
import { clearLineup, closeModal } from "../features/gameSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();

  const clearPlayers = () => {
    dispatch(clearLineup());
  };
  const closeModalOverlay = () => {
    dispatch(closeModal());
  };

  return (
    <div className="  text-white z-[100000] w-full h-[100vh] flex items-center justify-center fixed top-0 left-0 bg-gray-800 bg-opacity-30 ">
      <div className="bg-zinc-900 p-4 py-8 md:p-8 lg:py-14 flex flex-col items-center gap-7 rounded-xl">
        <h1 className="font1">Are You Sure You Want To Undraft All Players?</h1>
        <div className="flex gap-3 ">
          <button
            onClick={clearPlayers}
            className="px-10 py-1 rounded-md  tiersbg"
          >
            Yes
          </button>
          <button
            onClick={closeModalOverlay}
            className="px-10 py-1 rounded-md  tiersbg"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalOverlay = () => {
  return (
    <>{ReactDOM.createPortal(<Modal />, document.getElementById("portal"))}</>
  );
};
export default ModalOverlay;
