import { useSelector, useDispatch } from "react-redux";
import { nextQuestion, restartQ, startQ } from "../features/quizSlice";
/* eslint-disable react/prop-types */
const SingleQuiz = (props) => {
  const { quizId } = props;

  const { questionIndex, quizQuestions, score, restart, start } = useSelector(
    (store) => {
      const quiz = store.quiz.quizzes.find((q) => q.quizId === quizId);
      return quiz;
    }
  );

  const dispatch = useDispatch();

  const handleNextQ = (answer) => {
    dispatch(nextQuestion({ quizId, answer }));
  };

  const handleRestart = () => dispatch(restartQ({ quizId }));
  const startHandler = () => dispatch(startQ({ quizId }));

  const quizDivClassName = ` ${
    start ? "hidden" : ""
  } w-full min-h-[8rem] flex flex-col gap-3`;

  return (
    <section className="text-white my-5 rounded-lg bg-zinc-900 w-11/12 lg:min-w-2/5 min-h-[12rem] autox p-3 text-center ">
      {start && (
        <div className="flex flex-col items-center gap-7">
          <h1 className="text-2xl">Quiz - {props.quizTheme}</h1>
          <span>Difficulty {props.difficulty}</span>
          <button
            onClick={startHandler}
            className="min-w-[150px] min-h-[40px] p-[1px] border hover:bg-gray-300 hover:text-black transition-colors duration-300 ease-out"
          >
            Start
          </button>
        </div>
      )}
      {!restart ? (
        <div className={quizDivClassName}>
          <span>
            Question N {questionIndex + 1} :{" "}
            {quizQuestions[questionIndex].question}{" "}
          </span>
          <span>Your Score {score}</span>
          <div className="w-full grid grid-cols-2  ">
            {quizQuestions[questionIndex].options.map((option) => (
              <button
                className="text-sm min-w-[150px] min-h-[40px] p-[1px] border hover:bg-gray-300 hover:text-black transition-colors duration-300 ease-out"
                onClick={() => handleNextQ(option)}
                key={option}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-10 items-center">
          <span className="text-[1.2rem]">
            Congrats! You Finished Quiz! Your Score is {score}
          </span>
          <button
            className="min-w-[150px] min-h-[40px] p-[1px] border hover:bg-gray-300 hover:text-black transition-colors duration-300 ease-out"
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </section>
  );
};

export default SingleQuiz;
