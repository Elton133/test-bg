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
import {usePathname} from "next/navigation";

const sideBarVariants = {
  close: {
    minWidth: "56px",
    transition: {
      type: "tween",
      // bounce: 0,
      // damping: 15,
      // duration: 0.5,
    },
  },
  open: {
    minWidth: "200px",
    transition: {
      type: "tween",
      // bounce: 0,
      // damping: 15,
      // duration: 0.5,
    },
  },
};

const SideBar = () => {
  const path = usePathname();
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
  }, [controls, isOpen]);

  const navItems = [
    {
      name: "Home",
      icon: (
        <Home
          size={24}
          variant={path === "/dashboard" ? "Bold" : "Linear"}
          color={path === "/dashboard" ? "#063231" : "#706F66"}
        />
      ),
      url: "/dashboard",
    },
    {
      name: "My account",
      icon: (
        <Profile
          size={24}
          variant={path === "/dashboard/account" ? "Bold" : "Linear"}
          color={path === "/dashboard/account" ? "#063231" : "#706F66"}
        />
      ),
      url: "/account",
    },
    {
      name: "My learning",
      icon: (
        <Book1
          size={24}
          variant={path === "/dashboard/courses" ? "Bold" : "Linear"}
          color={path === "/dashboard/courses" ? "#063231" : "#706F66"}
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
          variant={path === "/dashboard/shop" ? "Bold" : "Linear"}
          color={path === "/dashboard/shop" ? "#063231" : "#706F66"}
        />
      ),
    },
    {
      name: "Support",
      icon: (
        <InfoCircle
          size={24}
          variant={path === "/dashboard/support" ? "Bold" : "Linear"}
          color={path === "/dashboard/support" ? "#063231" : "#706F66"}
        />
      ),
      url: "/support",
    },
    {
      name: "Settings",
      icon: (
        <Setting2
          size={24}
          variant={path === "/dashboard/account/settings" ? "Bold" : "Linear"}
          color={path === "/dashboard/account/settings" ? "#063231" : "#706F66"}
        />
      ),
      url: "/account/settings",
    },
  ];

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
          "flex flex-col items-center h-full px-5 py-12 gap-6",
          isOpen && "items-start px-4",
        )}
      >
        <motion.div
          className={cn(
            "rounded-full border flex justify-center items-center w-12 h-12", {
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
      </div>
    </motion.aside>
  );
};

export default SideBar;
