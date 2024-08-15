import Link from "next/link";
import { motion } from "framer-motion";
import {cn} from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  name: string;
  url?: string;
  showTitle?: boolean;
}

const NavigationLink = ({ children, name, url, showTitle }: Props) => {
  return (
    <Link
      href={url || "#"}
      className={cn("inline-flex gap-2 items-center overflow-clip whitespace-nowrap", {
        'hover:scale-105': !showTitle
      })}
      // className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      {showTitle && (
        <motion.p
          initial={{
            x: -10,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          className={"text-[#706F66] text-base font-Medium overflow-clip whitespace-nowrap tracking-wide"}
        >
          {name}
        </motion.p>
      )}
    </Link>
  );
};

export default NavigationLink;
