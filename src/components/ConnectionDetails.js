import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { SectionContainer } from "./SectionContainer";
const InputContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 300px;
  padding-bottom: 20px;
`;
const Input = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size:20px;
  width: 500px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 10px;
  input {
    padding: 0px 2px;
    height: 27px;
    background: #333;
    color: white;
    font-size: 20px;
  }
`;
const ConnectionDetails = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    let loadedUsername = localStorage.getItem("username");
    if (loadedUsername) {
      setUsername(loadedUsername);
    }
    let loadedPassword = localStorage.getItem("password");
    if (loadedPassword) {
      setPassword(loadedPassword);
    }
  }, []);
  return (
    <SectionContainer>
      <h1>Connection Details</h1>
      <InputContainer>
        <Input>
          <label htmlFor="username">Bot's Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Input>
        <Input>
          <label htmlFor="password">oauth</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Input>
      </InputContainer>
      <Button
        onClick={() => {
          localStorage.setItem("password", password);
          localStorage.setItem("username", username);
        }}
      >
        Save
      </Button>
    </SectionContainer>
  );
};

export default ConnectionDetails;
