import "./App.css";
import { VBox } from "./styles/VBox";
import Navbar from "./components/Navbar/Navbar";
import Wrappers from "./wrappers";
import CodeSection from "./components/CodeSection";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Metrics from "./components/Metics";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";

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
        <Routes>
          <Route
            index
            element={
              <div style={{ position: "relative" }}>
                <ReactNotifications />
                <StyledVBox>
                  <Navbar />
                  <SideBar />
                  <CodeSection />
                </StyledVBox>
                <Footer />
              </div>
            }
          />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </VBox>
    </Wrappers>
  );
}

export default App;
