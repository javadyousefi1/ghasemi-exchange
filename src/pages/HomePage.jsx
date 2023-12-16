// Logo
import { useRef } from "react";
import logo from "../assets/images/logo.png";
// css
import Styles from "../style/background.module.css";
import Price from "../components/Price";
import Faq from "../components/Faq";
const HomePage = () => {
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section style={Styles.background}>
        <div className=" h-[calc(100vh-62px)] flex flex-col items-center">
          <img src={logo} alt="logo" />
          <div className="relative bottom-5">
            <h1 className="text-xl font-bold text-center text-[#eed778]">
              سکه قاسمی
            </h1>
            <p className="text-gray-600 font-medium text-sm w-[300px] text-center mt-2 px-2">
              با تجربه چندین ساله و زحماتی بسیار در زمینه ارز و طلا خیلی خوشحال
              هستیم که در زمینه ارز و طلا مارو برای مشاوره انتخاب کردید
            </p>
          </div>
          <button
            onClick={scrollToTarget}
            className="px-4 py-2 mt-10 text-sm font-semibold rounded-lg text-mainBlack bg-mainGold "
          >
            قیمت لحظه ای
          </button>
        </div>
      </section>

      {/* price section */}
      <section ref={targetRef} className="h-[600px] flex flex-col">
        <h3 className="text-xl font-black text-center text-mainBlack">
          قیمت لحظه ای
        </h3>
        <p className="px-5 mt-1 text-sm text-center text-gray-500">
          قیمت ها به تومان و به صورت لحظه ای به روز رسانی می شوند
        </p>
        <Price text="درهم" />
        <Price text="دلار" />
        <Price text="لیر" />
        <Price text="پوند" />
      </section>

      {/* service */}
      <section className="">
        <h3 className="mb-10 text-xl font-black text-center text-mainBlack">
          خدمات
        </h3>

        <div className="flex flex-col items-center gap-y-4">
          <div className="bg-white w-[250px] h-[110px] rounded-[30px] shadow-xl flex justify-center items-center flex-col">
            <div className="w-2/4 bg-mainGold h-1/2 rounded-[10px] relative bottom-10 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 11.4c0 .77.6 1.4 1.33 1.4h1.5c.64 0 1.16-.55 1.16-1.22 0-.73-.32-.99-.79-1.16l-2.4-.84c-.48-.17-.8-.43-.8-1.16 0-.67.52-1.22 1.16-1.22h1.5c.74.01 1.34.63 1.34 1.4M10 12.85v.74M10 6.41v.78"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9.99 17.98A7.99 7.99 0 1 0 9.99 2a7.99 7.99 0 0 0 0 15.98ZM12.98 19.88c.9 1.27 2.37 2.1 4.05 2.1 2.73 0 4.95-2.22 4.95-4.95 0-1.66-.82-3.13-2.07-4.03"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <span className="relative font-semibold text-md bottom-5">
              خرید و فروش سکه بانکی
            </span>
          </div>

          <div className="bg-white w-[250px] h-[110px] rounded-[30px] shadow-xl flex justify-center items-center flex-col mt-10">
            <div className="w-2/4 bg-mainGold h-1/2 rounded-[10px] relative bottom-10 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m12.37 2.15 9 3.6c.35.14.63.56.63.93V10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V6.68c0-.37.28-.79.63-.93l9-3.6c.2-.08.54-.08.74 0ZM22 22H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v3ZM4 18v-7M8 18v-7M12 18v-7M16 18v-7M20 18v-7M1 22h22"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <span className="relative font-semibold text-md bottom-5">
              خرید و فروش سکه پارسیان
            </span>
          </div>

          <div className="bg-white w-[250px] h-[110px] rounded-[30px] shadow-xl flex justify-center items-center flex-col mt-10">
            <div className="w-2/4 bg-mainGold h-1/2 rounded-[10px] relative bottom-10 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.672 14.33c0 1.29.99 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4c-.79-.28-1.32-.71-1.32-1.93 0-1.12.87-2.03 1.94-2.03h2.51c1.23 0 2.22 1.04 2.22 2.33M12 6v12"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <span className="relative font-semibold text-md bottom-5">
              خرید و فروش شمش طلا
            </span>
          </div>

          <div className="bg-white w-[250px] h-[110px] rounded-[30px] shadow-xl flex justify-center items-center flex-col mt-10">
            <div className="w-2/4 bg-mainGold h-1/2 rounded-[10px] relative bottom-10 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.985 6.985 0 0 1-4.78 3.02c-.34.06-.69.09-1.05.09-.36 0-.71-.03-1.05-.09a6.985 6.985 0 0 1-4.78-3.02A6.968 6.968 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a.996.996 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.985 6.985 0 0 0 4.78 3.02c.34.06.69.09 1.05.09.36 0 .71-.03 1.05-.09 1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67ZM12.58 5.98l.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.701.701 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <span className="relative font-semibold text-md bottom-5">
              مشاوره در زمینه سرمایه گذاری
            </span>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="h-[900px]">
        <h3 className="my-10 text-xl font-black text-center text-mainBlack">
          پرسش های متداول
        </h3>

        <Faq/>
      </section>
    </>
  );
};

export default HomePage;
