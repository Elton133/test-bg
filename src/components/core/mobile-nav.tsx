import {motion, useAnimationControls} from "framer-motion";
import {usePathname} from "next/navigation";
import React, {useEffect} from "react";
import {cn} from "@/lib/utils";
import NavLink from "@components/ui/nav-link";
import useNavItems from "@hooks/use-nav-items";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const MobileNav = ({ open, onClose }: MobileNavProps) => {
  const controls = useAnimationControls();
  const navItems = useNavItems()
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

  return (
    <motion.div
      className={cn(
        "h-screen bg-white absolute top-[50px] left-0 py-4 px-4 z-50 sm:hidden",
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