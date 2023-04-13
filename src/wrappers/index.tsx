import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Styles";
import Aos from "aos";
import { useEffect } from "react";

type Props = {
  children: JSX.Element;
};
export const ThemeWrappers = ({ children }: Props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <ThemeProvider theme={theme["light"]}>
      <>{children}</>
    </ThemeProvider>
  );
};
