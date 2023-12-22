import { useState } from "react";
import { motion } from "framer-motion";

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      title: "روزها و ساعات کاری بورس سکه قاسمی به چه صورت است؟",
      value: "روزهای شنبه تا پنجشنه از ساعت 9 صبح تا 8 شب",
    },
    {
      id: 2,
      title: "قیمت ها در سکه قاسمی چگونه محاسبه می شود؟",
      value: "قیمت ها به صورت لحظه ای مشخص می شوند و تا حد زیادی به نفع مشتری محاسبه می گردد",
    },
    {
      id: 3,
      title: "آیا مشتریان دائمی مشمول تخفیف می شوند؟",
      value: "بله، به مشتریان دائمی و ممتاز خدمات متنوع با تخفیف ارائه می گردد",
    },
  ]);

  const [selectedFaq, setSelectedFaq] = useState(0);

  const handleSelectFaq = (id) => {
    setSelectedFaq((prevSelected) => (prevSelected === id ? 0 : id));
  };

  return (
    <>
      {faq.map((item) => (
        <motion.div
          key={item.id}
          className="grid w-full grid-cols-1 px-4 py-2 mb-4 rounded-lg grid-row-2 bg-mainGold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="flex items-center justify-between col-span-2 cursor-pointer"
            onClick={() => handleSelectFaq(item.id)}
          >
            <p className="font-medium text-mainBlack text-md">{item.title}</p>
            <button>
              <span>
                <motion.svg
                  className={`transition-all ease-linear duration-150 transform ${
                    selectedFaq === item.id ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <motion.path
                    stroke="#2b2b2b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                  ></motion.path>
                </motion.svg>
              </span>
            </button>
          </div>
          {selectedFaq === item.id && (
            <motion.p
              className="my-2 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {item.value}
            </motion.p>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default Faq;
