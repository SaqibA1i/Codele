import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { OTHER_DATA } from "../../redux/otherState";
import { getOtherState } from "../../redux/otherState/selectors";
import { HBox } from "../../styles/HBox";
import { VBox } from "../../styles/VBox";
import { theme } from "../../wrappers/theme";
import Form from "./Form";
import User from "./User";

const users = [
  "saqib",
  "luka",
  "cool ass",
  "muhammad",
  "shazzil",
  "cooler",
  "kool",
];
const B = styled.b`
  animation: rond 0.5s infinite alternate-reverse ease-in-out;
  @keyframes rond {
    from {
      font-size: 10px;
    }
    to {
      font-size: 12px;
    }
  }
`;

const SideBar = () => {
  const { streak, sideBar, userName, top7 = [] } = useSelector(getOtherState);
  const dispatch = useDispatch();

  const StyledVBox = styled(VBox)`
    ${({ theme }) => `
   background: ${theme.main};
    min-height: 70vh;
    width: 70vw;
    max-width: 500px;
    position: absolute;
    top: 133px;
    left: 0px;
    z-index: 1;
    justify-content: stretch;
    align-items: stretch;
    padding: 20px;
    border: 1px solid #333;
    color: white;
    gap: 10px;
    transition: all 1s ease-in-out;
  `}
  `;

  const Bh1 = styled.b`
    text-transform: uppercase;
    font-size: 12px;
    ${({ theme }) => `
        color: ${theme.accent}
    `}
  `;
  return (
    <StyledVBox
      style={{
        display: sideBar ? "flex" : "none",
      }}
    >
      <HBox
        color={theme.light.text}
        style={{ justifyContent: "end", cursor: "pointer" }}
        onClick={() => {
          dispatch(OTHER_DATA.updateSidebar(false));
        }}
      >
        ╳
      </HBox>
      <Bh1>Welcome{userName && ", " + userName}</Bh1>
      <HBox color={theme.light.text} style={{ justifyContent: "start" }}>
        <div style={{ minWidth: "13px", textAlign: "end" }}>
          <B>‎🔥</B>️
        </div>
        ‍ Streak count: {streak}
      </HBox>
      <Bh1>Today's First 7</Bh1>
      {top7.map((user, index) => (
        <User userName={user} index={index} />
      ))}
      <Bh1>UserName</Bh1>
      <Form />
    </StyledVBox>
  );
};

export default SideBar;
