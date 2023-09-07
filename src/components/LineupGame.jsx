import "./LineupGame.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {
  draftPlayer,
  undraftPlayer,
  openModal,
} from "../features/cart/gameSlice";
import { UilAngleDoubleDown } from "@iconscout/react-unicons";
import ModalOverlay from "../UI/Modal";
import { useEffect } from "react";

const players = [
  {
    id: 1,
    name: "Stephen Curry",
    position: "PG",
    tier: "S",
    price: 40,
    img: "https://wallpapercave.com/wp/wp8512292.jpg",
  },
  {
    id: 2,
    name: "Damian Lillard",
    position: "SG",
    tier: "S",
    price: 40,
    img: "https://wallpaperaccess.com/full/4895752.jpg",
  },
  {
    id: 3,
    name: "Kevin Durant",
    position: "SF",
    tier: "S",
    price: 40,
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3fb8d440869015.57903381e7a2a.jpg",
  },
  {
    id: 4,
    name: "Giannis ",
    position: "PF",
    tier: "S",
    price: 40,
    img: "https://wallpaperaccess.com/full/6686759.jpg",
  },
  {
    id: 5,
    name: "Joel Embiid",
    position: "C",
    tier: "S",
    price: 40,
    img: "https://i.pinimg.com/originals/7e/62/af/7e62af0ff0206ff3fab09d78757d1367.png",
  },
  {
    id: 6,
    name: "Ja Morant",
    position: "PG",
    tier: "A",
    price: 25,
    img: "https://www.ubuy.co.de/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODE0T3l4Rk9QYkwuX0FDX1NMMTUwMF8uanBn.jpg",
  },
  {
    id: 7,
    name: "Klay Thompson",
    position: "SG",
    tier: "A",
    price: 25,
    img: "https://pbs.twimg.com/media/D6k--lYUEAEr0ib.jpg:large",
  },
  {
    id: 8,
    name: "Jason Tatum",
    position: "SF",
    tier: "A",
    price: 25,
    img: "https://i.pinimg.com/736x/56/82/91/56829116cd518cf705dcf9daf587ceda.jpg",
  },
  {
    id: 9,
    name: "Jalen Brown",
    position: "PF",
    tier: "A",
    price: 25,
    img: "https://i.redd.it/p8dl0kc7ue591.jpg",
  },
  {
    id: 10,
    name: "Nikola Jokic",
    position: "C",
    tier: "A",
    price: 25,
    img: "https://i.pinimg.com/1200x/b4/f1/7a/b4f17a338c0de4dbe892310a851aa4f6.jpg",
  },
  {
    id: 11,
    name: "Trae Young",
    position: "PG",
    tier: "B",
    price: 15,
    img: "https://i.pinimg.com/1200x/12/29/44/122944b3866b09f073fef56a532cfd97.jpg",
  },
  {
    id: 12,
    name: "Bradley Beal",
    position: "SG",
    tier: "B",
    price: 15,
    img: "https://i.pinimg.com/736x/ec/2c/29/ec2c29a066a617f1b3afc0aa8004c1a2.jpg",
  },
  {
    id: 13,
    name: "Paul George",
    position: "SF",
    tier: "B",
    price: 15,
    img: "https://e0.pxfuel.com/wallpapers/589/770/desktop-wallpaper-paul-george-cartoon-paul-george-logo.jpg",
  },
  {
    id: 14,
    name: "D.Sabonis",
    position: "PF",
    tier: "B",
    price: 15,
    img: "https://i.seadn.io/gae/pbGWkXOEt8QlpRxFikjbH1nc02Ka8a5ZgHFUxbm8ujTMHorCK5LkL-u5EQBEyf3UoQpoVay6v_CLtdIXFD4H0dpwhoTHGplXDmVxhA?auto=format&dpr=1&w=1000",
  },
  {
    id: 15,
    name: "Bam Adebayo",
    position: "C",
    tier: "B",
    price: 15,
    img: "https://2kmtcentral.com/img/cards/uploaded/345665",
  },
  {
    id: 16,
    name: "Marcus Smart",
    position: "PG",
    tier: "C",
    price: 10,
    img: "https://pbs.twimg.com/media/EIyci0qXkAITEZV.jpg:large",
  },
  {
    id: 17,
    name: "B. Bogdanovic",
    position: "SG",
    tier: "C",
    price: 10,
    img: "https://cdn.wealthygorilla.com/wp-content/uploads/2022/10/Bogdan-Bogdanovic-Net-Worth.jpg",
  },
  {
    id: 18,
    name: "Brandon Ingram",
    position: "SF",
    tier: "C",
    price: 10,
    img: "https://i.pinimg.com/736x/c4/01/8e/c4018eb5d9f868c840fadbb428276246.jpg",
  },
  {
    id: 19,
    name: "Julius Randle",
    position: "PF",
    tier: "C",
    price: 10,
    img: "https://i.pinimg.com/1200x/d8/69/22/d86922285837ef4a2f3386670095f510.jpg",
  },
  {
    id: 20,
    name: "J. Valanciunas",
    position: "C",
    tier: "C",
    price: 10,
    img: "https://i.ebayimg.com/images/g/suIAAOSwUv5jImGl/s-l1200.webp",
  },
  {
    id: 21,
    name: "Payton Pritchard",
    position: "PG",
    tier: "D",
    price: 5,
    img: "https://pbs.twimg.com/media/EWxkFiZXsAAKjVK.jpg:large",
  },
  {
    id: 22,
    name: "Evan Fournier",
    position: "SG",
    tier: "D",
    price: 5,
    img: "https://2kdb.net/storage/players/22/evan_fournier_42473.jpg",
  },
  {
    id: 23,
    name: "Grand Williams",
    position: "SF",
    tier: "D",
    price: 5,
    img: "https://m.media-amazon.com/images/I/71aXrFK1tGL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 24,
    name: "Sandro 'Mamu'",
    position: "PF",
    tier: "D",
    price: 5,
    img: "https://www.picclickimg.com/oEMAAOSwv5ZkZ7VN/2-card-Sandro-Mamukelashvili-Rookie-Lot-all-listed.webp",
  },
  {
    id: 25,
    name: "Goga Bitadze",
    position: "C",
    tier: "D",
    price: 5,
    img: "https://i.pinimg.com/originals/2d/d2/f3/2dd2f3a022c5c4faffd38dcba781ca43.png",
  },
];
const tierS = players.filter((player) => player.tier === "S");
const tierA = players.filter((player) => player.tier === "A");
const tierB = players.filter((player) => player.tier === "B");
const tierC = players.filter((player) => player.tier === "C");
const tierD = players.filter((player) => player.tier === "D");

const LineupGame = () => {
  const { selectedPlayers, money, modal } = useSelector((store) => store.game);

  const dispatch = useDispatch();
  const addPlayer = (player) => {
    dispatch(draftPlayer({ player }));
  };
  const removePlayer = (player) => {
    dispatch(undraftPlayer(player));
  };
  const openModalOverlay = () => dispatch(openModal());

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [modal]);

  return (
    <section className="nbagame text-white py-8   ">
      {modal && <ModalOverlay modal={modal} />}
      <div className="flex flex-col gap-5 lg:text-xl ">
        <div className="text-center">
          <h1 className="text-2xl text-zinc-300 lg:text-4xl mb-7">
            Ultimate NBA Roster Builder
          </h1>
        </div>
        <div className="text-center flex flex-col  items-center">
          <span>Total 100$ To Spend on Draft</span>
          <UilAngleDoubleDown size="70" className="text-purple-500" />
          <span>Choose Player You Want And Click Draft</span>
          <UilAngleDoubleDown size="70" className="text-purple-500" />
          <span>Draft Players By Their Positions</span>
          <UilAngleDoubleDown size="70" className="text-purple-500" />
          <span>Build Your Unique Starting Five</span>
        </div>
      </div>
      <div className="text-4xl  text-center mt-[6rem] mb-8 innershadow p-3 ">
        Draft-$ left : <span className="text-green-500">{money}$</span>
      </div>
      <span></span>
      <div className="flex flex-col gap-20 md:p-8 ">
        {/* tier S */}
        <div>
          <h1 className="text-4xl text-purple-900 underline ">Tier S (40$)</h1>
          <div className=" overflow-scroll flex items-center  gap-5 p-3  min-h-[17rem] md:justify-center md:gap-14  ">
            {tierS.map((player) => (
              <div
                key={player.id}
                className=" gamecardS border border-purple-700 flex flex-col text-center min-w-[10rem] h-[10rem]  md:min-w-[12rem] md:h-[12]"
              >
                <img src={player.img} className="w-full h-full" />

                <span>{player.name}</span>
                <button
                  onClick={() => addPlayer(player)}
                  className="tiersbg w-[135px] rounded-md autox "
                >
                  Draft
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Tier A */}
        <div>
          <h1 className="text-4xl text-green-500 underline ">Tier A (25$)</h1>
          <div className=" overflow-scroll flex items-center gap-5 p-3  min-h-[17rem] md:justify-center md:gap-14 ">
            {tierA.map((player) => (
              <div
                key={player.id}
                className=" gamecardA border border-purple-700 flex flex-col text-center min-w-[10rem] h-[10rem] md:min-w-[12rem] md:h-[12]"
              >
                <img src={player.img} className="w-full h-full" />

                <span>{player.name}</span>
                <button
                  onClick={() => addPlayer(player)}
                  className="tiersbg w-[135px] rounded-md autox "
                >
                  Draft
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* tier B */}
        <div>
          <h1 className="text-4xl text-yellow-400 underline ">Tier B (15$)</h1>
          <div className=" overflow-scroll flex items-center gap-5 p-3  min-h-[17rem] md:justify-center md:gap-14  ">
            {tierB.map((player) => (
              <div
                key={player.id}
                className=" gamecardB border border-purple-700 flex flex-col text-center min-w-[10rem] h-[10rem] md:min-w-[12rem] md:h-[12]"
              >
                <img src={player.img} className="w-full h-full" />

                <span>{player.name}</span>
                <button
                  onClick={() => addPlayer(player)}
                  className="tiersbg w-[135px] rounded-md autox "
                >
                  Draft
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Tier C */}
        <div>
          <h1 className="text-4xl text-blue-500 underline ">Tier C (10$)</h1>
          <div className=" overflow-scroll flex items-center gap-5 p-3  min-h-[17rem] md:justify-center md:gap-14  ">
            {tierC.map((player) => (
              <div
                key={player.id}
                className=" gamecardC border border-purple-700 flex flex-col text-center min-w-[10rem] h-[10rem] md:min-w-[12rem] md:h-[12]"
              >
                <img src={player.img} className="w-full h-full object " />

                <span>{player.name}</span>
                <button
                  onClick={() => addPlayer(player)}
                  className="tiersbg w-[135px] rounded-md autox "
                >
                  Draft
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* tier D */}
        <div>
          <h1 className="text-4xl text-red-500 underline ">Tier D (5$)</h1>
          <div className=" overflow-scroll flex items-center gap-5 p-3  min-h-[17rem] md:justify-center md:gap-14 ">
            {tierD.map((player) => (
              <div
                key={player.id}
                className=" gamecardD border border-purple-700 flex flex-col text-center min-w-[10rem] h-[10rem] md:min-w-[12rem] md:h-[12]"
              >
                <img src={player.img} className="w-full h-full object-fill " />

                <span>{player.name}</span>
                <button
                  onClick={() => addPlayer(player)}
                  className="tiersbg w-[135px] rounded-md autox "
                >
                  Draft
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* final roster */}
      <div className="border-t-4 border-b-4 border-purple-500  mt-8 p-4 text-center ">
        <h1 className="text-3xl text-zinc-300  ">
          {selectedPlayers.length > 0
            ? "Your Squad"
            : "Drafted Players Displayed Here"}
        </h1>
        {money > 0 && <span>Money left {money}$</span>}
        <div className=" overflow-scroll flex items-center  gap-5 p-3  min-h-[17rem] md:justify-center md:gap-14  ">
          {selectedPlayers.map((player) => (
            <div
              key={player.id}
              className=" finalshadow border border-purple-700 flex flex-col text-center min-w-[10rem] h-[10rem]  md:min-w-[12rem] md:h-[12]"
            >
              <img src={player.img} className="w-full h-full" />

              <span>{player.name}</span>
              <button
                onClick={() => removePlayer(player)}
                className="tiersbg w-[135px] rounded-md autox "
              >
                Undraft
              </button>
            </div>
          ))}
        </div>
        {selectedPlayers.length > 0 && (
          <button
            className="tiersbg p-2 rounded-xl mt-3"
            onClick={openModalOverlay}
          >
            Clear Lineup
          </button>
        )}
      </div>
    </section>
  );
};

export default LineupGame;
