import { HBox } from "../../styles/HBox";
import { theme } from "../../wrappers/theme";

const Navbar = () => {
  return (
    <HBox
      style={{ fontFamily: "Dancing Script", fontSize: 70 }}
      color={theme.light.accent}
    >
      <p style={{ margin: "40px" }}>Codele</p>
    </HBox>
  );
};

export default Navbar;
