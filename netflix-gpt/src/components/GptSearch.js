import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen sm:h-auto object-cover" src={BG_URL} alt="logo" />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </>
  );
};
export default GPTSearch;