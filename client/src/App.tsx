import "./App.css";
import { VBox } from "./styles/VBox";
import Navbar from "./components/Navbar/Navbar";
import Wrappers from "./wrappers";
import CodeSection from "./components/CodeSection";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";

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
