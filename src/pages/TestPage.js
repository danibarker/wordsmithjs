import React from "react";

import styled from "styled-components";
import { useData } from "../providers/DataProvider";
import { handleCommand } from "../model/dictionary";
import { useState } from "react";
const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 60px;
  width: 90vw;
  margin: auto;
`;
const TestButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 20px;
  border-radius: 10px;
  &:hover {
    background-color: #45a049;
  }
`;
const TestInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const TestLabel = styled.label`
  font-size: 20px;
`;
const TestOutput = styled.div`
  font-size: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TestPage = () => {
  const { enabledCommands, api } = useData();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  return (
    <TestContainer>
      <TestLabel>Word:</TestLabel>
      <TestInput
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <TestOutput>{output}</TestOutput>
      {enabledCommands.map((command) => {
        return (
          <TestButton
            key={command}
            onClick={() => {
              console.log(`Running command: ${command}`);
              handleCommand(api, command, input).then((result) => {
                console.log(`Result: ${result}`);
                setOutput(result);
              });
            }}
          >
            {command}
          </TestButton>
        );
      })}
    </TestContainer>
  );
};

export default TestPage;
