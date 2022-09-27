import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { HBox } from "../../styles/HBox";
import Select from "react-select";
import { Algorithms, Language } from "../../TS types/types";
import { Box } from "../../styles/Box";
import { theme } from "../../wrappers/theme";
import { useDispatch } from "react-redux";
import { OTHER_DATA } from "../../redux/otherState";
import { useSelector } from "react-redux";
import { getGuessData } from "../../redux/guesses/selectors";

type Option = { value: string; label: string };

const SearchBar = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [tries, setTries] = useState<number>(4);
  const dispatch = useDispatch();
  const guesses = useSelector(getGuessData) || [];

  useEffect(() => {
    let temp: Option[] = [];
    Algorithms.forEach((key) => {
      key && temp.push({ value: key, label: key });
    });
    setOptions(temp);
  }, []);

  const onChange = (val: any) => {
    const { label = "" } = val || {};
    dispatch(OTHER_DATA.updateCurrSel(label));
  };
  return (
    <Box>
      <p style={{ marginBottom: "0 0 5px 0", color: "white" }}>
        Guess the Algorithm:{" "}
        <b style={{ color: theme.light.accent, fontWeight: 400 }}>
          <i
            style={{
              fontFamily: "Dancing Script",
              fontSize: "25px",
              fontWeight: 900,
              marginRight: 7,
            }}
          >
            {4 - guesses.filter((g) => g !== "").length}
          </i>
          tries remaining
        </b>
      </p>
      <Select
        options={options}
        onChange={(val) => {
          onChange(val);
        }}
      />
    </Box>
  );
};

export default SearchBar;
