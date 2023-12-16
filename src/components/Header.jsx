import { useState } from "react";
// image
import logo from "../assets/images/logo.png";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // toggle menu
  const handleToggleMenu = () => setIsOpenMenu((prev) => !prev);

  return (
    <>
      <header>
        <div className="flex items-center justify-between">
          <div>
            <button onClick={handleToggleMenu}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 7h18M3 12h18M3 17h18"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div>
            <img src={logo} className="w-[62px] h-[62px]" alt="logo" />
          </div>
        </div>
      </header>

      {isOpenMenu && <MobileMenu handleToggleMenu={handleToggleMenu} />}
    </>
  );
};

export default Header;
