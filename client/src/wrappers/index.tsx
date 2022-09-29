import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ReduxWrapper from "../redux/reduxStore";
import { THEME, theme } from "./theme";
type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Wrappers = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme[THEME.LIGHT]}>
      <ReduxWrapper>
        <BrowserRouter>
          <>{children}</>
        </BrowserRouter>
      </ReduxWrapper>
    </ThemeProvider>
  );
};

export default Wrappers;
