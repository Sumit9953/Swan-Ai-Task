
import { mic , arrowRight , addPhoto } from "./Image";

const SearchInput = () => {
  return (
    <div className="mt-10">
      <div className="w-[70%] relative h-40 mx-auto">
        <input className="bg-transparent hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-[#4F4BEE] border-2 place-content-start placeholder:text-black text-black w-full p-5 h-full " type="text" placeholder="Enter your " />
        <div className="flex  absolute right-3 bottom-2">
            <button>
                <img src={addPhoto} alt="add-photo" />
            </button>
            <button>
                <img src={mic} alt="Voice" />
            </button>
            <button>
                <img src={arrowRight} alt="right" />
            </button>
        </div>
      </div>

    </div>
  );
};

export default SearchInput;
