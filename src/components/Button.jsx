
import { Link , useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ icon , title , link="/" }) => {
    const currentPage = useLocation().pathname;

  return (
    <div className="w-full  text-black">
      <Link className={`flex mb-5 px-4 py-2 hover:bg-[#E99B66] items-center ${currentPage === link ? `bg-[#E99B66]` : `bg-[#f5f3f3]  `}  gap-3`} to={link}>
        <img className="w-8 h-8" src={icon} alt="" />
        <h1 className="font-medium">{title}</h1>
      </Link>
    </div>
  );
};

export default Button;
