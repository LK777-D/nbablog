import Showcase from "../UI/Showcase";
import Header from "../components/Header";
import SingleQuiz from "../components/SingleQuiz";
import {
  legendPlayers,
  legendsTeams,
  nba2000s1,
  nba2000s2,
  nba2010s1,
  nba2010s2,
  nbaAllStar1,
  nbaAllStar2,
} from "../quizQuestion";

const Quiz = () => {
  return (
    <section className=" lg:flex lg:flex-col lg:gap-20  mb-10 text-white w-full min-h-[25rem] ">
      <Header />
      <div className="p-5 flex flex-col gap-4 text-center">
        <h1 className="text-2xl lg:text-4xl  ">Welcome To Our Quiz Page</h1>
        <span className="lg:text-2xl font1">
          Test your NBA knowledge with our fun and challenging quizzes. Are you
          a true basketball aficionado?
        </span>
      </div>
      <div className="flex flex-col gap-9 lg:grid lg:grid-cols-2 lg:gap-[7rem] ">
        <div className="lg:flex lg:flex-col lg:gap-14">
          <h1 className=" lg:text-6xl old-school text-4xl text-red-600 text-center   ">
            #Old School
          </h1>
          <div className="lg:flex lg:flex-col lg:relative">
            <SingleQuiz
              quizId={1}
              quizQuestions={legendPlayers}
              quizTheme="Legendary Players"
              difficulty="7/10"
            />
            <SingleQuiz
              quizId={2}
              quizQuestions={legendsTeams}
              quizTheme="Legendary Teams"
              difficulty="6/10"
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:gap-14">
          <h1 className=" lg:text-6xl  nba2000s text-4xl text-yellow-500 text-center ">
            #2000s NBA
          </h1>
          <div className="lg:flex lg:flex-col lg:relative">
            <SingleQuiz
              quizId={3}
              quizQuestions={nba2000s1}
              quizTheme="2000s NBA Part 1"
              difficulty="7/10"
            />
            <SingleQuiz
              quizId={4}
              quizQuestions={nba2000s2}
              quizTheme="2000s NBA Part 2"
              difficulty="6/10"
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:gap-14">
          <h1 className=" lg:text-6xl nba2000s2 text-4xl text-green-500 text-center ">
            #2010s NBA
          </h1>
          <div className="lg:flex lg:flex-col lg:relative">
            <SingleQuiz
              quizId={5}
              quizQuestions={nba2010s1}
              quizTheme="2010s NBA Part 1"
              difficulty="6/10"
            />
            <SingleQuiz
              quizId={6}
              quizQuestions={nba2010s2}
              quizTheme="2010s NBA Part 2"
              difficulty="5/10"
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:gap-14">
          <h1 className=" lg:text-6xl nbaallstar text-4xl text-blue-500 text-center">
            #NBA All-Star
          </h1>
          <div className="lg:flex lg:flex-col lg:relative">
            <SingleQuiz
              quizId={7}
              quizQuestions={nbaAllStar1}
              quizTheme="NBA All-Star Part 1"
              difficulty="6/10"
            />
            <SingleQuiz
              quizId={8}
              quizQuestions={nbaAllStar2}
              quizTheme="NBA All-Star Part 2"
              difficulty="4/10"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Showcase text="Lineup Game, News and Amazing blog" bg="showbg2" />
      </div>
    </section>
  );
};

export default Quiz;
