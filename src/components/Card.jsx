
// eslint-disable-next-line react/prop-types
const Card = ({ upTitle  ,icon, lotitle, iconTitle , bgColor = "bg-primary"}) => {
  return (
    <div>
      <div className={`card w-52 ${bgColor} ${bgColor === "bg-primary" ? `hover:bg-white` : `hover:bg-blue-400 hover:text-white`} text-primary-content`}>
        <div className="card-body">
          <h2 className="font-medium">{upTitle}</h2>
          <p className="font-semibold text-2xl">{lotitle}</p>
          <div className="card-actions flex justify-between mt-5 ">
            <p>{iconTitle}</p>
            <button className="">
                <img src={icon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
