import { ThemeProvider } from "styled-components";
import { THEME, theme } from "./theme";
type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Wrappers = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme[THEME.LIGHT]}>
      <>{children}</>
    </ThemeProvider>
  );
};

export default Wrappers;
