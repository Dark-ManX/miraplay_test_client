import axios from "axios";
import { useState, useEffect } from "react";
import API from "../../additional";
import Button from "../../components/Button";
import Radioblock from "../../components/RadioBlock/RadioBlock";
import GamesList from "../../components/GamesList";

const { REQUEST_ADDRESS, GAMES_ADDRESS } = API;

const GamesPage = () => {
  const [games, setGames] = useState([]);
  const [part, setPart] = useState([]);
  const [count, setCount] = useState(1);
  const [filter, setFilter] = useState("");

  function handleClick() {
    setCount(count + 1);
  }

  function clickHandler(e) {
    const {
      parentNode: { textContent },
    } = e.target;
    setFilter(textContent === "All" ? "" : textContent);
  }

  function proceedCondition(param) {
    if (param.length > 9) {
      setPart(param.slice(0, count * 9));
      setGames(param);
      return;
    }
    setPart(param);
    return;
  }

  useEffect(() => {
    // const fetchedGames = async () => await axios.get(`${GAMES_ADDRESS}/games`);
    fetchGames();
    async function fetchGames() {
      const res = await axios.get(`${GAMES_ADDRESS}/games`);
      let filteredArr;

      if (filter) {
        filteredArr = res.data.reduce((acc, el) => {
          if (el.genre !== filter.toUpperCase()) return acc;
          acc.push(el);
          return acc;
        }, []);
      }

      if (!filteredArr) {
        proceedCondition(res.data);
        return;
      }
      proceedCondition(filteredArr);
    }
  }, [count, filter]);

  return (
    <>
      {}
      <div>
        <p className={`text-[48px] font-[NeueMachineBold] uppercase`}>
          All games
        </p>

        <Radioblock handleClick={clickHandler} />

        {games && <GamesList arr={part} />}
        {games && (
          <Button
            text="Load more"
            className={`block mt-[50px] mx-[auto] bg-[rgba(63,156,20,.5)] border-[1px] border-[#3f9c14] rounded-[10px] px-[10px] uppercase  hover:bg-[#3f9c14] h-[50px]`}
            onClick={handleClick}
          />
        )}
      </div>
    </>
  );
};

export default GamesPage;
