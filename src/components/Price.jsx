const Price = ({text}) => {
  return (
    <div className="w-full h-[100px] flex mt-5">
      <div className="rounded-tr-full rounded-br-full bg-mainGold h-full w-[100px] flex  justify-center items-center">
        <span className="font-medium text-white">{text}</span>
      </div>
      <div className="w-full h-full rounded-bl bg-mainBlack rounded-tl-md"></div>
    </div>
  );
};

export default Price;
