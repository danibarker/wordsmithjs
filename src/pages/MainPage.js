import { useEffect, useState } from "react";
import styled from "styled-components";
import { createClient } from "../model/client";
import { Button } from "../components/Button";
const Main = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  flex-direction: column;
`;
const MessageList = styled.div`
  height: 300px;
  overflow-y: auto;
  width: 60%;
  padding-top: 40px;
  border: 1px solid white;
  padding: 10px 22px;
  margin-top: 110px;
  border-radius: 20px;
`;

const Message = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const MainPage = ({ client, setClient, connected, setConnected }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const connectClient = async () => {
      let username = localStorage.getItem("username");
      let password = localStorage.getItem("password");
      let channels = localStorage.getItem("channels");
      if (channels) {
        channels = JSON.parse(channels);
      }
      if (username && password && channels) {
        let newClient = await createClient(
          username,
          password,
          channels,
          setMessages
        );
        setClient(newClient);
      }
    };
    connectClient();
  }, [setClient]);
  const disconnect = () => {
    client.disconnect();
    setConnected(false);
  };
  const connect = () => {
    client.connect();
    setConnected(true);
  };
  return (
    <Main>
      {!connected && (
        <Button big onClick={connect}>
          Connect
        </Button>
      )}
      {connected && (
        <Button big onClick={disconnect}>
          Disconnect
        </Button>
      )}
      <MessageList>
        {messages &&
          messages.map((message) => {
            return (
              <Message>
                <div>{message.tags.username}:</div>
                <div style={{ textAlign: "right" }}> {message.message}</div>
              </Message>
            );
          })}
      </MessageList>
    </Main>
  );
};

export default MainPage;
