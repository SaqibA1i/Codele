import styled from "styled-components";
import { Box } from "../../styles/Box";
import { HBox } from "../../styles/HBox";

const StyledHBox = styled(HBox)`
  font-size: 13px;
  justify-content: start;
`;

const Logo = styled(Box)`
  border-radius: 20px;
  background: white;
  padding: 10px;
  font-weight: 900;
`;
const P = styled.p`
  color: white;
`;
type Props = {
  userName: string;
  index: number;
};
const User = ({ userName, index }: Props) => {
  return (
    <StyledHBox>
      <Logo>{index + 1}</Logo>
      <P>{userName}</P>
    </StyledHBox>
  );
};

export default User;
