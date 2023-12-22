// Logo
import { useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
// css
import Styles from "../style/background.module.css";
import Price from "../components/Price";
import Faq from "../components/Faq";
import axios from "axios";
import Header from "../components/Header";
// rrd
import { useSearchParams } from "react-router-dom";
const HomePage = () => {
  const currentCostButtonRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const handlecurrentCostButton = () => {
    if (currentCostButtonRef.current) {
      currentCostButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <div className="h-[] mb-10">
        <section style={Styles.background}>
          <div className=" h-[calc(100vh-50px)] flex flex-col items-center justify-center gap-y-10 ">
            <img src={logo} alt="logo" className="w-[150px]" />
            <div className="">
              <h1 className="text-xl font-bold text-center text-[#eed778] ">
                سکه قاسمی
              </h1>
              <p className="text-gray-600 font-medium text-sm w-[300px] text-center mt-2 px-2">
                با تجربه چندین ساله و زحماتی بسیار در زمینه ارز و طلا خیلی
                خوشحال هستیم که در زمینه ارز و طلا مارو برای مشاوره انتخاب کردید
              </p>
            </div>
            <button
              onClick={handlecurrentCostButton}
              className="px-4 py-2 mt-10 text-sm font-semibold rounded-lg text-mainBlack bg-mainGold "
            >
              قیمت لحظه ای
            </button>
          </div>
        </section>

        {/* price section */}
        <section ref={currentCostButtonRef} className="h-[600px] flex flex-col">
          <h3 className="text-xl font-black text-center text-mainBlack">
            قیمت لحظه ای
          </h3>
          <p className="px-5 mt-1 text-sm text-center text-gray-500">
            قیمت ها به تومان و به صورت لحظه ای به روز رسانی می شوند
          </p>
          <Price text="درهم" img="derham" />
          <Price text="دلار" img="dollar" />
          <Price text="لیر" img="lir" />
          <Price text="یورو" img="erou" />
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
        <section className="">
          <h3 className="my-10 text-xl font-black text-center text-mainBlack">
            پرسش های متداول
          </h3>

          <Faq />
        </section>
        {/* contact us */}
        <section className="flex flex-col items-center">
          <h3 className="mt-10 text-xl font-black text-center text-mainBlack">
            تماس با ما
          </h3>
          <p className="px-5 mt-1 text-sm text-center text-gray-500">
            از راه های زیر می توانید در کوتاه ترین زمان با ما تماس بگیرید
          </p>

          <div className="w-full p-4 mt-3 bg-white rounded-lg">
            <div className="flex items-center justify-start gap-x-2">
              <div className="bg-secondryGold bg-opacity-30 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z"
                    stroke="#eed778"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
                    stroke="#eed778"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-bold whitespace-nowrap">آدرس :</p>
              <p className="text-sm font-bold text-gray-400 whitespace-nowrap">
                حسین آباد , خیابان مژده , پلاک 36
              </p>
            </div>
          </div>

          <div className="w-full p-4 mt-3 bg-white rounded-lg">
            <div className="flex items-center justify-start gap-x-2">
              <div className="bg-secondryGold bg-opacity-30 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <svg
                  className="relative left-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 6v10c0 4-1 5-5 5H6c-4 0-5-1-5-5V6c0-4 1-5 5-5h6c4 0 5 1 5 5ZM11 4.5H7"
                    stroke="#eed778"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9 18.1A1.55 1.55 0 1 0 9 15a1.55 1.55 0 0 0 0 3.1Z"
                    stroke="#eed778"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-bold whitespace-nowrap">موبایل :</p>
              <p className="text-sm font-bold text-gray-400 whitespace-nowrap">
                {" "}
                <a href="tel:09011043054">0901-1043054</a>
              </p>
            </div>
          </div>

          <div className="w-full p-4 mt-3 bg-white rounded-lg">
            <div className="flex items-center justify-start gap-x-2">
              <div className="bg-secondryGold bg-opacity-30 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z"
                    stroke="#eed778"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-bold whitespace-nowrap">تلفن :</p>
              <p className="text-sm font-bold text-gray-400 whitespace-nowrap">
                <a href="tel:02125440100">021-25440100</a>
              </p>
            </div>
          </div>
          <iframe
            className="px-3 mt-4 rounded-md shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6480.429999716809!2d51.4924993!3d35.6963265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03c6686d4eed%3A0x3b9f050b6de57b4e!2z2LXYsdin2YHbjCDZgtin2LPZhduM!5e0!3m2!1sen!2s!4v1702738479204!5m2!1sen!2s"
            width="100%"
            height="450"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <a
            target="_blank"
            href="https://www.google.com/maps/place/Tehran+Province%D8%8C+%D9%BE%DB%8C%D8%B1%D9%88%D8%B2%DB%8C%D8%8C+%D9%85%D9%86%D8%B7%D9%82%D9%87+%DB%B1%DB%B3%D8%8C+%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C,+%D8%B5%D8%B1%D8%A7%D9%81%DB%8C+%D9%82%D8%A7%D8%B3%D9%85%DB%8C,+Iran%E2%80%AD/@35.6983871,51.4837875,16z/data=!4m6!3m5!1s0x3f8e03c6686d4eed:0x3b9f050b6de57b4e!8m2!3d35.6983871!4d51.4881649!16s%2Fg%2F11fhjtwx9q"
          >
            <button className="px-4 py-2 mt-10 text-sm font-semibold rounded-lg text-mainBlack bg-mainGold ">
              درباره ما در گوگل نظر دهید
            </button>
          </a>
        </section>
      </div>
    </>
  );
};

export default HomePage;
