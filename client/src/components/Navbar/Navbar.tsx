import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { OTHER_DATA } from "../../redux/otherState";
import { getOtherState } from "../../redux/otherState/selectors";
import { HBox } from "../../styles/HBox";
import { VBox } from "../../styles/VBox";
import { theme } from "../../wrappers/theme";

const P = styled.p`
  font-size: 25px;
  cursor: pointer;
`;
const Navbar = () => {
  const { sideBar } = useSelector(getOtherState);
  const dispatch = useDispatch();
  return (
    <HBox
      style={{
        color: theme.light.text,
        justifyContent: "space-between",
        margin: "0px 0 10px 15px",
        maxWidth: "500px",
        width: "90vw",
        borderBottom: "1px solid white",
      }}
    >
      <P
        onClick={() => {
          dispatch(OTHER_DATA.updateSidebar(!sideBar));
        }}
      >
        ☰
      </P>
      <p
        style={{
          color: theme.light.accent,
          fontFamily: "Dancing Script",
          fontSize: 70,
          margin: "20px auto",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        Codele
      </p>
      <p style={{ fontSize: "25px", color: "transparent" }}>☰</p>
    </HBox>
  );
};

export default Navbar;
