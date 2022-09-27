import { useSelector } from "react-redux";
import styled from "styled-components";
import { getOtherState } from "../../redux/otherState/selectors";
import { HBox } from "../../styles/HBox";
import { VBox } from "../../styles/VBox";
import { theme } from "../../wrappers/theme";

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

const Navbar = () => {
  const { streak } = useSelector(getOtherState);
  return (
    <VBox width={"100vw"} style={{ alignItems: "flex-start" }}>
      <HBox
        style={{
          color: theme.light.text,
          textAlign: "left",
          margin: "20px 0 0 15px",
        }}
      >
        <div style={{ minWidth: "13px", textAlign: "end" }}>
          <B>‎🔥</B>️
        </div>
        ‍ Streak count: {streak}
      </HBox>
      <p
        style={{
          color: theme.light.accent,
          fontFamily: "Dancing Script",
          fontSize: 70,
          margin: "40px auto",
          marginTop: "20px",
        }}
      >
        Codele
      </p>
    </VBox>
  );
};

export default Navbar;
