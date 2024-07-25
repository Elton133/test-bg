"use client";

import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ArrowRightToLine } from "lucide-react";
import NavLink from "@components/ui/nav-link";
import {usePathname} from "next/navigation";
import useNavItems from "@hooks/use-nav-items";

const sideBarVariants = {
  close: {
    minWidth: "56px",
    transition: {
      type: "spring",
      ease: "easeInOut",
      stiffness: 500,
      damping: 30,
      duration: 0.5,
    },
  },
  open: {
    minWidth: "200px",
    transition: {
      type: "spring",
        ease: "easeInOut",
      stiffness: 500,
      duration: 0.5,
      damping: 30,
    },
  },
};

const SideBar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimationControls();
  const navItems = useNavItems()

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      controls.start("open");
    } else {
      controls.start("close");
    }
  }, [controls, isOpen]);

  return (
    <motion.aside
      className={
        "bg- shadow-d hidden sm:block min-h-[calc(100vh_-_80px)] h-full w-[110px]"
      }
      animate={controls}
      variants={sideBarVariants}
    >
      <motion.div
        className={cn(
          "flex flex-col items-center fixed shadow-md h-full px-5 py-12 gap-6 bg-white overflow-y-scroll no-scrollbar",
          isOpen && "items-start px-4",
        )}
      >
        <motion.div
          className={cn(
            "rounded-full border flex justify-center items-center min-w-12 min-h-12", {
              "place-self-end": isOpen,
              }
          )}
        >
          {/*{!isOpen && !sidePane && (*/}
          {/*  <button className={"my-4"} onClick={handleToggleSidebar}>*/}
          {/*    <Home />*/}
          {/*  </button>*/}
          {/*)}*/}
          <motion.button
            initial={false}
            animate={{
                rotateY: isOpen ? 180 : 0,
                transition: {
                    duration: 0.5,
                },
            }}
            onClick={handleToggleSidebar}
          >
            <ArrowRightToLine size={24} color={"#706F66 "} />
          </motion.button>
        </motion.div>

        <ul
          className={cn("flex flex-col gap-6 mb-12", {
            "w-full": isOpen,
          })}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className={cn(
                "hover:bg-[#E6EBEA] h-14 min-w-14 flex flex-col justify-center rounded-[12px] cursor-pointer",
                {
                  "bg-[#DAE0E0]": path === item.url,
                  "bg-white": path !== item.url,
                  "items-center": !isOpen,
                  "px-4": isOpen,
                },
              )}
            >
              <NavLink name={item.name} url={item.url} showTitle={isOpen}>
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.aside>
  );
};

export default SideBar;
