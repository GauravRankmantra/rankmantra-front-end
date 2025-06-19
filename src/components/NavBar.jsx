

import { Menus } from "./utils";
import Logo from "../assets/logo.png";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { Link } from "react-router-dom";


function NavBar() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#ffffff] "
      style={{zIndex:"9999"}}
      >
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <a href="/">
            <img src={Logo} alt="" className="w-48 h-auto" />
            </a>
            
            
          </div>

          <ul className="gap-x-1 lg:flex-center hidden" onClick={scrollToTop}>
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <Link to="/contact-us">
            <button
              aria-label="sign-in"
              className="bg-red-600 text-sm text-black z-[999] relative lg:px-5 lg:py-3 py-2 px-1 lg:left-0 left-2 shadow rounded-xl flex-center"
            >
              Contact Us
            </button>
            </Link>
           
            <div className="lg:hidden" onClick={scrollToTop}>
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;