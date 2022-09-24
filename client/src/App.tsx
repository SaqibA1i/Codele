import "./App.css";
import { VBox } from "./styles/VBox";
import Navbar from "./components/Navbar/Navbar";
import Wrappers from "./wrappers";
import CodeSection from "./components/CodeSection";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const StyledVBox = styled(VBox)`
  justify-content: flex-start;
`;

function App() {
  return (
    <Wrappers>
      <VBox
        style={{ justifyContent: "space-between", gap: 40 }}
        height={"100vh"}
      >
        <ReactNotifications />
        <StyledVBox>
          <Navbar />
          <CodeSection />
        </StyledVBox>
        <Footer />
      </VBox>
    </Wrappers>
  );
}

export default App;
