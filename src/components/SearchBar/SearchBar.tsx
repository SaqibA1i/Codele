import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HBox } from "../../styles/HBox";
import Select from "react-select";
import { Language } from "../../TS types/types";
import { Box } from "../../styles/Box";
import { theme } from "../../wrappers/theme";

const StyledHBox = styled(HBox)`
  background: "transparent";
`;
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
type Option = { value: string; label: string };

const SearchBar = () => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    let temp: Option[] = [];
    Object.keys(Language).forEach((key) => {
      temp.push({ value: key, label: key });
    });
    setOptions(temp);
  }, []);
  /* Simple example */
  return (
    <Box>
      <p style={{ marginBottom: "0 0 5px 0", color: "white" }}>
        Guess the Algorithm:
      </p>
      <Select options={options} />
    </Box>
  );
};

export default SearchBar;
