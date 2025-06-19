// DesktopMenu.js
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DesktopMenu({ menu }) {
  const [isHover, toggleHover] = useState(false);
  const menuRef = useRef(null);

  const hasSubMenu = menu?.subMenu?.length;

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const subMenuPosition = () => {
    if (!menuRef.current) return { top: "auto", bottom: "auto" };

    const rect = menuRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    if (rect.bottom + 300 > viewportHeight) {
      return { bottom: "100%" };
    } else {
      return { top: "100%" };
    }
  };

  return (
    <motion.li
      className="group/link"
      onHoverStart={() => toggleHover(true)}
      onHoverEnd={() => toggleHover(false)}
      key={menu.name}
      ref={menuRef}
    >
      <Link to={menu.link || "#"} className="flex-center gap-1 cursor-pointer px-3 py-1 rounded-xl relative font-semibold">
        {/* <motion.span className="relative z-10">
          {menu.name}
        </motion.span> */}

      <span className="relative z-10">
          {menu.name}
         
          <motion.span
            layoutId="underline"
            className="absolute left-0 right-0 h-0.5 bg-red-600 origin-left"
            initial={{ width: 0 }}
            animate={isHover ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 0.3 }}
            style={{ bottom: -2 }}
          />
        </span>

        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </Link>

      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
          style={subMenuPosition()}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu.map((submenu, i) => (
              <div className="relative cursor-pointer" key={i}>
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="text-sm mb-4 text-gray-500">
                    {menu?.subMenuHeading?.[i]}
                  </p>
                )}
                <Link to={submenu.link} className="flex-center gap-x-4 group/menubox">
                  <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                    <h6 className="font-semibold">{submenu.name}</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
