import Card from "./Card";
import SearchInput from "./SearchInput";
import SuggestBox from "./SuggestBox";

import { down , edu , squa } from "./Image";

const Home = () => {

  const CardData = [
    {
      upTitle : "Ask me" ,
      icon : down,
      lotitle: "Anything"
    },
    {
      upTitle : "Ask me about" ,
      lotitle:"Education",
      iconTitle:"Specialization",
      icon:edu,
      bgColor:"bg-white"
    },
    {
      upTitle : "Ask me about" ,
      lotitle:"Medication",
      iconTitle:"Specialization",
      icon:squa,
      bgColor:"bg-white"
    },
  ]

  return (
    <div className="right-0 p-10 text-black bg-no-repeat bg-cover bg-center bg-home-img w-[85%] h-screen fixed">
      <div className="mx-auto mt-20 w-[60%]">
        <h1 className="text-3xl font-semibold text-center text-black">
          What can I do for you ?
        </h1>
        <div className="flex justify-center mt-10 items-center gap-3">

        {CardData.map((card , index) => <Card upTitle={card.upTitle} lotitle={card.lotitle} bgColor={card.bgColor} iconTitle={card.iconTitle} icon={card.icon} key={index} />)}
         
        </div>
        <SearchInput />
        <div className="w-[70%] mx-auto">

        <h1 className="mt-10 text-3xl text-center">Try to Srach this -</h1>
        <div className="flex mt-10 gap-10 items-center justify-center flex-wrap">
            <SuggestBox suggestion={"How i cook pasta Ai dente?"} />
            <SuggestBox suggestion={"How i cook pasta Ai dente?"} />
            <SuggestBox suggestion={"How i cook pasta Ai dente?"} />
        </div>
        </div>
      </div>
    
    </div>
  );
};

export default Home;
