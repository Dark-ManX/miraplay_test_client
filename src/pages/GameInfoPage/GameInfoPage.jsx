import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import addresses from "../../additional";
import Button from "../../components/Button";

const { GAMES_ADDRESS } = addresses;

const GameInfoPage = () => {
  const [game, setGame] = useState([]);
  const [link, setLink] = useState("");
  console.log(link);

  const params = useParams();
  const { id } = params;
  const {
    commonGameName,
    exactingness,
    gameVideoUrl,
    publisher,
    releaseDate,
    gameDescription,
    inTop,
    genre,
  } = game;

  useEffect(() => {
    fetchOneMovie(id);
    async function fetchOneMovie(gameId) {
      const res = await axios.get(`${GAMES_ADDRESS}/games`);
      const result = res.data.find((el) => el._id === id);

      if (game === result) return;
      setGame(result);

      convertYoutubeLink(result.gameVideoUrl);
    }

    function convertYoutubeLink(addr) {
      if (!addr) return;
      let arr = addr.split("/");
      const arrPart = arr.slice(0, arr.indexOf(-1));
      const elToChange = arr.at(-1).replace("watch?v=", "embed/");
      arr = [...arrPart, elToChange];
      setLink(arr.join("/"));
    }
  }, []);

  return (
    <div
      className={`font-[14px] text-[#afafaf] bg-gradient-[to top left,rgba(80,217,12,.1),#020202]`}
    >
      <h2 className={`text-[48px] font-extrabold text-[white]`}>
        {commonGameName}
      </h2>
      <p className={`mb-[30px]`}>{gameDescription}</p>
      <div className={`flex`}>
        <div
          className={`w-[450px] bg-[#242424] border-[#454545] border-[1px] p-[40px] rounded-[10px] mr-[50px]`}
        >
          <h3 className={`text-[18px]`}>Characteristics</h3>
          <p className={`mt-[32px] flex`}>
            genre:
            <span className={`ml-[auto] font-bold text-[white]`}>
              {genre ? genre : "no data"}
            </span>
          </p>
          <p className={`mt-[32px] flex`}>
            publisher:
            <span className={`ml-[auto] font-bold text-[white]`}>
              {publisher ? publisher : "no data"}
            </span>
          </p>
          <p className={`mt-[32px] flex align-middle`}>
            exactingness:
            <span
              className={`ml-[auto] translate-y-[10px] bg-gray-500 w-[100px] h-[4px] before:content-[''] before:absolute before:h-[4px]
              } before:left-0 before:bg-orange-500`}
            ></span>
          </p>
          <p className={`mt-[32px] flex`}>
            releaseDate:
            <span className={`ml-[auto] font-bold text-[white]`}>
              {releaseDate ? releaseDate : "no data"}
            </span>
          </p>

          <Button
            text="Regiser and play"
            className={`mt-[32px] bg-[#3F9C14] text-[white] font-bold px-[30px] py-[10px] uppercase rounded-xl`}
          />
        </div>
        <div className={`rounded-10px basis-[900px]`}>
          <iframe
            title={commonGameName}
            className={`w-[100%] h-[100%] rounded-[10px]`}
            src={link}
            allow
          >
            {console.log(
              "https://www.youtube.com/embed/LGcECozNXEw?si=OYxTrAEbqE94OAZP",
              link
            )}
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default GameInfoPage;
