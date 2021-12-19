import { useEffect } from "react";
import { createClient } from "../client";

const MainPage = ({client, setClient, connected, setConnected}) => {
 
  useEffect(() => {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    let channels = localStorage.getItem("channels");
    if (channels) {
      channels = JSON.parse(channels);
    }
    if (username && password && channels) {
      let newClient = createClient(username, password, channels);
      setClient(newClient);
    }
    
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
    <div>
      {!connected && <button onClick={connect}>Connect</button>}
      {connected && <button onClick={disconnect}>Disconnect</button>}
    </div>
  );
};

export default MainPage;
