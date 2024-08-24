import {
  Bag2,
  Book1,
  Home,
  InfoCircle,
  Profile,
  Setting2,
} from "iconsax-react";
import { usePathname } from "next/navigation";

type URLSMap = {
  [key: string]: (string | RegExp)[];
};

const useNavItems = () => {
  const path = usePathname();

  const URLS: URLSMap = {
    HOME: ["/dashboard"],
    PROFILE: ["/dashboard/account"],
    LEARNING: ["/dashboard/my-learning", /^\/dashboard\/course\/[a-zA-Z0-9-\/]+$/],
    SHOP: ["/dashboard/shop"],
    SUPPORT: ["/dashboard/support"],
    SETTINGS: [/^\/dashboard\/account-settings\/[a-zA-Z0-9-\/]+$/],
  };

  const isFocused = (link: string): boolean => {
    if (!URLS[link]) return false;
    if (link === 'HOME' && path === '/dashboard') return true;
    return URLS[link].some((url: string | RegExp) => {
       if (typeof url === "string") {
        return path === url;
      } else {
         return url.test(path);
       }
    });
  };

  return [
    {
      name: "Home",
      url: "/dashboard",
      isFocused: isFocused("HOME"),
      icon: (
        <Home
          size={24}
          variant={isFocused("HOME") ? "Bold" : "Linear"}
          color={isFocused("HOME") ? "#063231" : "#706F66"}
        />
      ),
    },
    {
      name: "My account",
      isFocused: isFocused("PROFILE"),
      icon: (
        <Profile
          size={24}
          variant={isFocused("PROFILE") ? "Bold" : "Linear"}
          color={isFocused("PROFILE") ? "#063231" : "#706F66"}
        />
      ),
      url: "/dashboard/account",
    },
    {
      name: "My learning",
      isFocused: isFocused("LEARNING"),
      icon: (
        <Book1
          size={24}
          variant={isFocused("LEARNING") ? "Bold" : "Linear"}
          color={isFocused("LEARNING") ? "#063231" : "#706F66"}
        />
      ),
      url: "/dashboard/my-learning",
    },
    {
      name: "BSG Shop",
      url: "/dashboard/shop",
      isFocused: isFocused("SHOP"),
      icon: (
        <Bag2
          size={24}
          variant={isFocused("SHOP") ? "Bold" : "Linear"}
          color={isFocused("SHOP") ? "#063231" : "#706F66"}
        />
      ),
    },
    {
      name: "Support",
      isFocused: isFocused("SUPPORT"),
      icon: (
        <InfoCircle
          size={24}
          variant={isFocused("SUPPORT") ? "Bold" : "Linear"}
          color={isFocused("SUPPORT") ? "#063231" : "#706F66"}
        />
      ),
      url: "/dashboard/support",
    },
    {
      name: "Settings",
      isFocused: isFocused("SETTINGS"),
      icon: (
        <Setting2
          size={24}
          variant={isFocused("SETTINGS") ? "Bold" : "Linear"}
          color={isFocused("SETTINGS") ? "#063231" : "#706F66"}
        />
      ),
      url: "/dashboard/account-settings",
    },
  ];
};

export default useNavItems;
