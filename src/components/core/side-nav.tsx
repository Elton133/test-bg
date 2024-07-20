"use client";
import {
  Home,
  Book1,
  Setting2,
  Profile,
  Bag2,
  InfoCircle,
} from "iconsax-react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ArrowRightToLine } from "lucide-react";
import NavLink from "@components/ui/nav-link";

const sideBarVariants = {
  close: {
    width: "110px",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      duration: 0.5,
    },
  },
  open: {
    width: "200px",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      duration: 0.5,
    },
  },
};

const SideBar = () => {

  const [active, setActive] = useState(window.location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimationControls();

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      controls.start("open");
    } else {
      controls.start("close");
    }
    setActive(window.location.pathname);
  }, [controls, isOpen]);

  const navItems = [
    {
      name: "Home",
      icon: (
        <Home
          size={24}
          variant={active === "/dashboard" ? "Bold" : "Linear"}
          color={"#706F66"}
        />
      ),
      url: "/dashboard",
    },
    {
      name: "My account",
      icon: (
        <Profile
          size={24}
          variant={active === "/account" ? "Bold" : "Linear"}
          color={"#706F66"}
        />
      ),
      url: "/account",
    },
    {
      name: "My learning",
      icon: (
        <Book1
          size={24}
          variant={active === "/courses" ? "Bold" : "Linear"}
          color={"#706F66"}
        />
      ),
      url: "/courses",
    },
    {
      name: "BSG Shop",
      url: "/shop",
      icon: (
        <Bag2
          size={24}
          variant={active === "/shop" ? "Bold" : "Linear"}
          color={"#706F66"}
        />
      ),
    },
    {
      name: "Support",
      icon: (
        <InfoCircle
          size={24}
          variant={active === "/support" ? "Bold" : "Linear"}
          color={"#706F66"}
        />
      ),
      url: "/support",
    },
    {
      name: "Settings",
      icon: (
        <Setting2
          size={24}
          variant={active === "/account/settings" ? "Bold" : "Linear"}
          color={"#706F66"}
        />
      ),
      url: "/account/settings",
    },
  ];

  console.log("active", active);

  return (
    <motion.aside
      className={
        "h-[calc(100vh_-_80px)] bg-white absolute top-0 left-0 shadow z-50 hidden sm:block"
      }
      animate={controls}
      variants={sideBarVariants}
    >
      <div
        className={cn(
          "flex flex-col items-center h-full py-36",
          isOpen && "items-start px-4",
        )}
      >
        <div className="rounded-full border flex justify-center absolute top-12 right-2 items-center w-12 h-12">
          {/*{!isOpen && !sidePane && (*/}
          {/*  <button className={"my-4"} onClick={handleToggleSidebar}>*/}
          {/*    <Home />*/}
          {/*  </button>*/}
          {/*)}*/}
          <button
            className={cn("", {
              "rotate-180": isOpen,
            })}
            onClick={handleToggleSidebar}
          >
            <ArrowRightToLine size={24} color={"#706F66 "} />
          </button>
        </div>

        <ul
          className={cn("flex flex-col gap-6", {
            "w-full": isOpen,
          })}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className={cn(
                "hover:bg-[#E6EBEA] h-14 min-w-14 flex flex-col justify-center rounded-[12px] cursor-pointer",
                {
                  "bg-[#DAE0E0]": active === item.url,
                  "bg-white": active !== item.url,
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
      </div>
    </motion.aside>
  );
};

export default SideBar;
