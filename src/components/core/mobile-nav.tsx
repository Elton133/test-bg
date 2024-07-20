import {motion, useAnimationControls} from "framer-motion";
import {usePathname} from "next/navigation";
import React, {useEffect} from "react";
import {Bag2, Book1, Home, InfoCircle, Profile, Setting2} from "iconsax-react";
import {cn} from "@/lib/utils";
import NavLink from "@components/ui/nav-link";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const MobileNav = ({ open, onClose }: MobileNavProps) => {
  const controls = useAnimationControls();
  const path = usePathname();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  useEffect(() => {
    if (open) {
      controls.start("open");
    } else {
      controls.start("closed");
    }
  }, [controls, open]);

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
    <motion.div
      className={cn(
        "h-screen bg-white absolute top-[55px] shadow left-0 py-4 px-4 z-50 sm:hidden",
        {
          "w-64": open,
        },
      )}
      initial={false}
      animate={controls}
      variants={variants}
    >
      <ul
        className={cn("flex flex-col gap-6", {
          "w-full": open,
        })}
      >
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            onClick={onClose}
            className={cn(
              "hover:bg-[#E6EBEA] h-14 min-w-14 flex flex-col justify-center rounded-[12px] cursor-pointer",
              {
                "bg-[#DAE0E0]": path === item.url,
                "bg-white": path !== item.url,
                "items-center": !open,
                "px-4": open,
              },
            )}
            initial={false}
            animate={{
              x: open ? 0 : -100,
              opacity: open ? 1 : 0,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <NavLink name={item.name} url={item.url} showTitle={true}>
              {item.icon}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileNav;