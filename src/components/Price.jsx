import dollar from "../assets/images/dollar.png";
import erou from "../assets/images/erou.JPG";
import lir from "../assets/images/lir.JPG";
import derham from "../assets/images/derham.PNG";

const Price = ({ text, img }) => {
  return (
    <div className="w-full h-[89px] flex mt-5">
      <div className="rounded-tr-full rounded-br-full bg-mainGold h-full w-[70px] flex  justify-center items-center">
        <span className="font-medium text-white">{text}</span>
      </div>
      <div className="flex items-center justify-end w-full h-full rounded-bl bg-mainBlack rounded-tl-md">
        <div className="ml-4">
          <img
            src={dollar}
            alt={text}
            className="w-[140px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
