import { HBox } from "../../styles/HBox";
import { theme } from "../../wrappers/theme";

const Navbar = () => {
  return (
    <HBox
      fontSize={70}
      style={{ fontFamily: "Dancing Script" }}
      color={theme.light.accent}
    >
      <p style={{ margin: "40px" }}>Codele</p>
    </HBox>
  );
};

export default Navbar;
