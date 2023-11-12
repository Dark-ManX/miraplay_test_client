const Radioblock = ({ handleClick }) => {
  return (
    <div>
      <label
        className={`relative inline-block bg-[#242424] mr-[20px] w-[auto] p-[20px] leading-[143%] rounded-2xl focus-within:bg-[#3F9C14] hover:bg-[#3F9C14]`}
      >
        All
        <input
          type="radio"
          name="genre"
          className={`w-[100%] h-[100%] bg-[teal] absolute top-0 left-0 opacity-0`}
          defaultChecked
          onClick={handleClick}
        />
      </label>
      <label
        className={`relative inline-block bg-[#242424] mr-[20px] w-[auto] p-[20px] leading-[143%] rounded-2xl focus-within:bg-[#3F9C14] hover:bg-[#3F9C14]`}
      >
        Free
        <input
          type="radio"
          name="genre"
          className={`w-[100%] h-[100%] bg-[teal] absolute top-0 left-0 opacity-0`}
          onClick={handleClick}
        />
      </label>
      <label
        className={`relative inline-block bg-[#242424] mr-[20px] w-[auto] p-[20px] leading-[143%] rounded-2xl focus-within:bg-[#3F9C14] hover:bg-[#3F9C14]`}
      >
        Moba
        <input
          type="radio"
          name="genre"
          className={`w-[100%] h-[100%] bg-[teal] absolute top-0 left-0 opacity-0`}
          onClick={handleClick}
        />
      </label>
      <label
        className={`relative inline-block bg-[#242424] mr-[20px] w-[auto] p-[20px] leading-[143%] rounded-2xl focus-within:bg-[#3F9C14] hover:bg-[#3F9C14]`}
      >
        Shooters
        <input
          type="radio"
          name="genre"
          className={`w-[100%] h-[100%] bg-[teal] absolute top-0 left-0 opacity-0`}
          onClick={handleClick}
        />
      </label>
      <label
        className={`relative inline-block bg-[#242424] mr-[20px] w-[auto] p-[20px] leading-[143%] rounded-2xl focus-within:bg-[#3F9C14] hover:bg-[#3F9C14]`}
      >
        Launchers
        <input
          type="radio"
          name="genre"
          className={`w-[100%] h-[100%] bg-[teal] absolute top-0 left-0 opacity-0`}
          onClick={handleClick}
        />
      </label>
      <label
        className={`relative inline-block bg-[#242424] mr-[20px] w-[auto] p-[20px] leading-[143%] rounded-2xl focus-within:bg-[#3F9C14] hover:bg-[#3F9C14]`}
      >
        Mmorpg
        <input
          type="radio"
          name="genre"
          className={`w-[100%] h-[100%] bg-[teal] absolute top-0 left-0 opacity-0`}
          onClick={handleClick}
        />
      </label>
      <label
        className={`relative inline-block bg-[#242424] mr-[20px] w-[auto] p-[20px] leading-[143%] rounded-2xl focus-within:bg-[#3F9C14] hover:bg-[#3F9C14]`}
      >
        Strategy
        <input
          type="radio"
          name="genre"
          className={`w-[100%] h-[100%] bg-[teal] absolute top-0 left-0 opacity-0`}
          onClick={handleClick}
        />
      </label>
      <label
        className={`relative inline-block bg-[#242424] mr-[20px] w-[auto] p-[20px] leading-[143%] rounded-2xl focus-within:bg-[#3F9C14] hover:bg-[#3F9C14]`}
      >
        Fighting
        <input
          type="radio"
          name="genre"
          className={`w-[100%] h-[100%] bg-[teal] absolute top-0 left-0 opacity-0`}
          onClick={handleClick}
        />
      </label>
      <label
        className={`relative inline-block bg-[#242424] mr-[20px] w-[auto] p-[20px] leading-[143%] rounded-2xl focus-within:bg-[#3F9C14] hover:bg-[#3F9C14]`}
      >
        Racing
        <input
          type="radio"
          name="genre"
          className={`w-[100%] h-[100%] bg-[teal] absolute top-0 left-0 opacity-0`}
          onClick={handleClick}
        />
      </label>
      <label
        className={`relative inline-block bg-[#242424] mr-[20px] w-[auto] p-[20px] leading-[143%] rounded-2xl focus-within:bg-[#3F9C14] hover:bg-[#3F9C14]`}
      >
        Survival
        <input
          type="radio"
          name="genre"
          className={`w-[100%] h-[100%] bg-[teal] absolute top-0 left-0 opacity-0`}
          onClick={handleClick}
        />
      </label>
      <label
        className={`relative inline-block bg-[#242424] mr-[20px] w-[auto] p-[20px] leading-[143%] rounded-2xl focus-within:bg-[#3F9C14] hover:bg-[#3F9C14]`}
      >
        Online
        <input
          type="radio"
          name="genre"
          className={`w-[100%] h-[100%] bg-[teal] absolute top-0 left-0 opacity-0`}
          onClick={handleClick}
        />
      </label>
    </div>
  );
};

export default Radioblock;
