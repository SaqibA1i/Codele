import "./App.css";
import { VBox } from "./styles/VBox";
import Navbar from "./components/Navbar/Navbar";
import Wrappers from "./wrappers";
import CodeSection from "./components/CodeSection";
import { CodeData, CodeType, Language } from "./TS types/types";
import SearchBar from "./components/SearchBar/SearchBar";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import { SpinnerRoundOutlined } from "spinners-react";
import { Box } from "./styles/Box";

const StyledVBox = styled(VBox)`
  justify-content: flex-start;
`;

function App() {
  const data: CodeData = {
    type: CodeType.LANGUAGE,
    language: Language.JAVASCRIPT,
    data: " binarySearch(arr, size)\n\t\t   // loop until beg is not equal to end\n    midIndex = (beg + end)/2\n    if (item == arr[midIndex] )\n        return midIndex\n    else if (item > arr[midIndex] ) \n        beg = midIndex + 1\n    else                       \n        end = midIndex - 1 ",
  };
  return (
    <Wrappers>
      <VBox
        style={{ justifyContent: "space-between", gap: 40 }}
        height={"100vh"}
      >
        <StyledVBox>
          <Navbar />
          <CodeSection codeData={data} />
        </StyledVBox>
        <Footer />
      </VBox>
    </Wrappers>
  );
}

export default App;
