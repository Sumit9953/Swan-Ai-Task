import Button from "./Button";

import {
  logo,
  Addcircle,
  AccountCircle,
  clock,
  notepade,
  widgets,
  file,
  iphone,
  question,
} from "./Image";

const Navbar = () => {
  // const [click , setClick] = useState(false);

  const buttonData = [
    {
      title: "New Trend",
      url: Addcircle,
      linl: "/new-trend",
    },
    {
      title: "Recent Search",
      url: clock,
      link: "/recent-search",
    },
    {
      title: "Notpade",
      url: notepade,
      link: "/notepade",
    },
    {
      title: "File Manager",
      url: file,
      link: "/file-manager",
    },
    {
      title: "Feature",
      url: widgets,
      link: "/feature",
    },
    {
      title: "Help",
      url: question,
      link: "/help",
    },
    {
      title: "Sign In",
      link: "/signup",
      url: iphone,
    },
  ];

  return (
    <div className="text-black">
      <div className="w-full bg-[#f5f3f3] h-20 relative">
        <div className="absolute flex items-center  right-10 top-5 ">
          <img src={AccountCircle} alt="" />
          <h1 className="font-semibold text-lg">Uesr name</h1>
        </div>
      </div>

      <div className="bg-[#f5f3f3]  z-10 absolute top-0 w-[15%] p-4 h-screen flex flex-col justify-between items-center">
        <div className="w-full">
          <div className="flex gap-2 mx-5 mb-10 mt-5 items-center">
            <img className="" src={logo} alt="logo" />
            <h1 className="text-3xl font-bold">Swan</h1>
          </div>
          {buttonData.map(
            (data, index) =>
              index < 2 && (
                <Button
                  key={index}
                  link={data.link}
                  icon={data.url}
                  title={data.title}
                />
              )
          )}
        </div>

        <div className=" w-full">
          {buttonData.map(
            (data, index) =>
              index >= 2 && (
                <Button
                  link={data.link}
                  key={index}
                  icon={data.url}
                  title={data.title}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
