import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import addNotification from "../../helpers/addNotification";
import { OTHER_DATA } from "../../redux/otherState";
import { getOtherState } from "../../redux/otherState/selectors";

const Input = styled.input`
  color: #333;
  padding: 5px 5px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Button = styled.button`
  ${({ theme }) => `
    background: ${theme.accent};
    border: 0;
    color: white;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
`}
`;
const Form = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector(getOtherState);
  const inputRef = useRef<any>();

  const submit = () => {
    let name: string = inputRef.current.value;
    if (name.length >= 12) {
      addNotification({
        type: "info",
        message: "Name must be less than 12 characters",
        time: 3000,
      });
    } else {
      addNotification({
        type: "success",
        message: "Successfully updated name",
        time: 3000,
      });
      dispatch(OTHER_DATA.updateUserName(name));
    }
  };
  return (
    <>
      <Input type={"text"} placeholder="Name ..." ref={inputRef} />
      <p style={{ fontSize: "11px", margin: 0 }}>
        Note: By submitting your name you are agreeing for it to be displayed on
        Codele.
      </p>
      <Button onClick={submit}>{userName ? "Update" : "Submit"} Name</Button>
    </>
  );
};
export default Form;
