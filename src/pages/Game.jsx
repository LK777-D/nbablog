import Header from "../components/Header";
import LineupGame from "../components/LineupGame";
import Alert from "../UI/Alert";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { clearAlerts } from "../features/cart/gameSlice";
import Showcase from "../UI/Showcase";

const Game = () => {
  const { existingPlayerAlert, lineupFullAlert, moneyAlert } = useSelector(
    (store) => store.game
  );
  const dispatch = useDispatch();
  if (existingPlayerAlert || lineupFullAlert || moneyAlert) {
    setTimeout(() => dispatch(clearAlerts()), 900);
  }

  return (
    <section>
      {existingPlayerAlert && <Alert text=" Player Alredy In Lineup " />}
      {lineupFullAlert && <Alert text="Can't Add More Than 5 Players " />}
      {moneyAlert && <Alert text="Not Enough $$$ " />}
      <Header />
      <LineupGame />
      <div className="my-10">
        <Showcase text="Explore Everything About The NBA" bg="showbg3" />
      </div>
    </section>
  );
};

export default Game;
