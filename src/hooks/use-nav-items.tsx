import {
  Bag2,
  Book1,
  Home,
  InfoCircle,
  Profile,
  Setting2,
} from "iconsax-react";
import { usePathname } from "next/navigation";

const useNavItems = () => {
  const path = usePathname();
  return [
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
      url: "/dashboard/account",
    },
    {
      name: "My learning",
      icon: (
        <Book1
          size={24}
          variant={path === "/dashboard/my-learning" ? "Bold" : "Linear"}
          color={path === "/dashboard/my-learning" ? "#063231" : "#706F66"}
        />
      ),
      url: "/dashboard/my-learning",
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
};

export default useNavItems;
