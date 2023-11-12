import Button from "../Button";
import { Link } from "react-router-dom";

const GamesList = ({ arr }) => {
  console.log("arr", arr);
  return (
    <ul className={`grid grid-cols-3 gap-[30px] mt-[30px]`}>
      {arr.map(
        ({
          _id,
          gameImage,
          commonGameName,
          genre,
          gameDescription,
          gameLaunchers,
          releaseDate,
          publisher,
          exactingness,
        }) => {
          return (
            <li
              key={_id}
              className={`rounded-2xl overflow-hidden bg-[#1c1c1c] border-[1px] border-[#454545] hover:bg-[#242424] transition-colors duration-200`}
            >
              <Link to={`${_id}`}>
                <div className={`relative`}>
                  <img
                    src={gameImage}
                    alt={commonGameName}
                    className={`h-[335px] w-[100%]`}
                  />
                  <div
                    className={`bg-[rgba(12,5,32,.25)] absolute top-[20px] left-[20px] backdrop-blur-[10px] p-[5px] rounded-xl overflow-hidden`}
                  >
                    <p>{genre}</p>
                  </div>
                </div>
                <div className={`p-[20px]`}>
                  <h3>{commonGameName}</h3>
                  <p className={`inline-block`}>
                    {!gameDescription.legth > 120
                      ? gameDescription
                      : gameDescription.slice(0, 120)}
                  </p>
                  <Button text="" />
                </div>
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default GamesList;
