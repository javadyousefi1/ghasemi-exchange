// Logo
import logo from "../assets/images/logoWhite.png";
const HomePage = () => {
  return (
    <>
      <div className=" h-[calc(100vh-62px)] flex flex-col items-center">
        <img src={logo} alt="logo" />
        <div className="relative bottom-5">
          <h1 className="text-xl font-bold text-center text-[#eed778]">
            سکه قاسمی
          </h1>
          <p className="text-gray-300 text-sm w-[300px] text-center mt-2 px-2">
            با تجربه چندین ساله و زحماتی بسیار در زمینه ارز و طلا خیلی خوشحال
            هستیم که در زمینه ارز و طلا مارو برای مشاوره انتخاب کردید
          </p>
        </div>
        <button className="px-4 py-2 mt-10 text-sm font-semibold rounded-lg text-mainBlack bg-mainGold ">
          قیمت ارز لحظه
        </button>
      </div>
    </>
  );
};

export default HomePage;
