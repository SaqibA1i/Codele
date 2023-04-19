import Aos from "aos";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document!.getElementById("hello")!.scrollTo(0, pathname === "/" ? 0 : 1);
  }, [pathname]);

  return null;
}