import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const ConnectionDetails = () => {
  const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px
  `;
  const Input = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
    
  `;
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
    <div>
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
    </div>
  );
};

export default ConnectionDetails;
