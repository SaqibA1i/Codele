import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { VBox } from "./styles/VBox";
import Navbar from "./components/Navbar";
import { ThemeWrappers } from "./wrappers";
import HomePage from "./pages/HomePage";
import "./styles/main.scss";
import Footer from "./components/Footer";

import ContactPage from "./pages/ContactPage";
import Sidebar from "react-sidebar";
import styled from "styled-components";
import "./App.css";
import "./styles/main.scss";

import {
  HouseDoorFill,
  HousesFill,
  TelephoneFill,
  BriefcaseFill,
  PeopleFill,
  CaretDownFill,
  QuestionCircleFill,
} from "react-bootstrap-icons";
import Community from "./pages/Community";
import PastCommunity from "./pages/Community/PastCommunity";
import CurrentCommunities from "./pages/Community/CurrentCommunities";
import FutureCommunity from "./pages/Community/FutureCommunities";
import ScrollToTop from "./components/ScrollToTop";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import { HBox } from "./styles/HBox";
import Partners from "./pages/Partners";
import Jobs from "./pages/Jobs";
import AboutUs from "./pages/AboutUs";

const StyledVBox = styled(VBox)`
  padding-top: 20px;
  gap: 1rem;
  align-items: start;
  width: 70vw;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => `${theme.black}`};
    padding: 10px 20px;
    width: 100%;
    border-bottom: 1px solid #9d9d9c40;
    display: flex;
    gap: 10px;
    font-size: 1.5rem;
  }
`;

function App() {
  const [sideOpen, setSideOpen] = useState<boolean>(false);
  const [showDropdown, setDropDown] = useState<boolean>(false);
  const onSideBarClick = () => {
    console.log("s");
    setSideOpen(!sideOpen);
  };

  return (
    <ThemeWrappers>
      <VBox style={{ paddingTop: "70px" }} id="1234">
        <BrowserRouter>
          <Sidebar
            sidebar={
              <VBox>
                <StyledVBox>
                  <Link to="/" onClick={onSideBarClick}>
                    <HouseDoorFill /> Home
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      setDropDown(!showDropdown);
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "-webkit-fill-available",
                    }}
                  >
                    <HBox>
                      <HousesFill />
                      Communities
                    </HBox>
                    <CaretDownFill
                      style={{
                        transition: "0.5s all",
                        transform: showDropdown
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  </Link>
                  <VBox
                    style={{
                      maxHeight: showDropdown ? "600px" : "0px",
                      opacity: showDropdown ? 1 : 0,
                      transition: "0.5s all",
                      alignSelf: "stretch",
                      gap: "1rem",
                      zIndex: showDropdown ? "10" : "-1",
                      width: "-webkit-fill-available",
                    }}
                  >
                    <Link to="/present" onClick={onSideBarClick}>
                      <HousesFill color="white" />
                      Present
                    </Link>
                    <Link to="/future" onClick={onSideBarClick}>
                      <HousesFill color="white" />
                      Future
                    </Link>
                  </VBox>
                  <Link to="/contactus" onClick={onSideBarClick}>
                    <TelephoneFill />
                    Contact Us
                  </Link>
                  <Link to="/jobs" onClick={onSideBarClick}>
                    <BriefcaseFill /> Jobs
                  </Link>
                  <Link to="/partners" onClick={onSideBarClick}>
                    <PeopleFill />
                    Partners
                  </Link>
                  <Link to="/about" onClick={onSideBarClick}>
                    <QuestionCircleFill />
                    About Us
                  </Link>
                </StyledVBox>
              </VBox>
            }
            onSetOpen={() => console.log("here")}
            styles={{
              content: { width: "100vw", scrollBehavior: "smooth" },
              root: { height: "100vh" },
              sidebar: { background: "white", width: "fit-content" },
            }}
            contentId="hello"
            transitions={true}
            docked={sideOpen}
            touch={true}
            touchHandleWidth={20}
          >
            <Navbar onSideBarClick={onSideBarClick} />
            <ScrollToTop />

            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="contactus" element={<ContactPage />} />
                <Route path="communities" element={<Community />} />
                <Route path="future" element={<FutureCommunity />} />
                <Route path="past" element={<PastCommunity />} />
                <Route path="present" element={<CurrentCommunities />} />
                <Route path="partners" element={<Partners />} />
                <Route path="jobs" element={<Jobs />} />
                <Route path="about" element={<AboutUs />} />
              </Route>
            </Routes>
            <Footer />
          </Sidebar>
        </BrowserRouter>
      </VBox>
    </ThemeWrappers>
  );
}

export default App;
