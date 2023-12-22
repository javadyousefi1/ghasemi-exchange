// framer motion
import { motion } from "framer-motion";
// image
import logo from "../assets/images/logo.png";
// rrd
import { useSearchParams } from "react-router-dom";
const MobileMenu = ({ handleToggleMenu, handleSetScroll }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const menuItem = [
    { url: "current-cost", text: "قیمت لحظه ای" },
    { url: "service", text: "خدمات" },
    // { url: "about-us", text: "درباره ما" },
    { url: "faq", text: "پرسش های متداول" },
    // { url: "comments", text: "ثبت نطرات" },
    { url: "contact-us", text: "  تماس با ما" },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleMenuClick = (url) => {
    // setSearchParams({ menu: url });
    handleSetScroll(url);
    handleToggleMenu();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 flex justify-center w-screen h-screen bg-white z-[60] md:hidden"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-40 flex flex-col items-center bg-white"
        >
          <motion.div
            variants={item}
            className="flex flex-col items-center bg-white"
          >
            <img src={logo} alt="logo" className="bg-white w-[100px] my-10" />
            <h1 className="text-2xl font-black bg-white text-cetner text-mainBlack">
              سکه قاسمی
            </h1>
            {/* <p className="text-xs text-gray-400 bg-white">خرید و فروش سکه های طلا</p> */}
            <p className="mt-1 text-sm text-gray-400 bg-white">
              مشاوره در زمینه سرمایه گذاری
            </p>
          </motion.div>
          <motion.nav className="mt-8" variants={item}>
            <ul className="flex flex-col items-center bg-white gap-y-2">
              {menuItem.map((item) => (
                <li
                  key={item.text}
                  className="font-medium bg-white text-md"
                  onClick={() => handleMenuClick(item.url)}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.button
            variants={item}
            onClick={handleToggleMenu}
            className="flex items-center justify-center mt-16 rounded-lg w-9 h-9 bg-mainBlack"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="relative p-1 rounded-lg bg-mainBlack left-[0]"
              fill="none"
            >
              <path
                d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
                stroke="#f4de81 "
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
