import styled from "styled-components";
import { useData } from "../providers/DataProvider";
// checkbox for each command to enable/disable
const CommandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
`;
const InputContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-block: 40px;
`;
const ButtonContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
const Input = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 20px;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 10px;
  input[type="checkbox"] {
    height: 27px;
    width: 27px;
  }
  label {
    padding-left: 10px;
    width: 130px;
  }
`;

const CommandsButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 3px 7px;
  margin: 0 20px 20px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 20px;
  border-radius: 10px;
  &:hover {
    background-color: #45a049;
  }
`;

const CommandOptions = () => {
  const data = useData();
  const { commands, setEnabledCommands, enabledCommands } = data;
  return (
    <CommandsContainer>
      <ButtonContainer>
        <CommandsButton
          onClick={() => {
            setEnabledCommands(commands);
          }}
        >
          Select All
        </CommandsButton>

        <CommandsButton
          onClick={() => {
            setEnabledCommands([]);
          }}
        >
          Clear All
        </CommandsButton>
      </ButtonContainer>
      <InputContainer>
        {commands.map((command) => {
          return (
            <Input key={command}>
              <input
                type="checkbox"
                id={command}
                checked={enabledCommands.includes(command)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setEnabledCommands([...enabledCommands, command]);
                  } else {
                    setEnabledCommands(
                      enabledCommands.filter((c) => c !== command)
                    );
                  }
                }}
              />
              <label htmlFor={command}>{command}</label>
            </Input>
          );
        })}
      </InputContainer>
    </CommandsContainer>
  );
};

export default CommandOptions;
