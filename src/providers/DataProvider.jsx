import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCommands } from "../model/dictionary";

const DataContext = React.createContext();
export const useData = () => React.useContext(DataContext);
const DataProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [api, setApi] = useState(
    "https://us-central1-dictionary-c2faa.cloudfunctions.net/api/"
  );
  const [channels, setChannels] = useState([]);
  const [client, setClient] = useState();
  const [connected, setConnected] = useState();
  const [commands, setCommands] = useState([]); // [command, setCommand
  const [enabledCommands, setEnabledCommands] = useState([]); // [command, setCommand]
  const saveChannelList = useCallback((newList) => {
    localStorage.setItem("channels", JSON.stringify(newList));
  }, []);
  useEffect(() => {
    let loadedUsername = localStorage.getItem("username");
    if (loadedUsername) {
      setUsername(loadedUsername);
    }
    let loadedPassword = localStorage.getItem("password");
    if (loadedPassword) {
      setPassword(loadedPassword);
    }
    let loadedApi = localStorage.getItem("api");
    if (loadedApi) {
      setApi(loadedApi);
    }
    let loaded = JSON.parse(localStorage.getItem("channels"));
    if (loaded) {
      setChannels(loaded);
    }
    const getCommandsList = async () => {
      let commandList = await getCommands(api);
      setCommands(
        commandList.filter(
          (command) =>
            ![
              "checkFakes",
              "fakeDefinition",
              "getIngEdEnding",
              "getPluralcommand",
            ].includes(command)
        )
      );
    };
    if (api) {
      getCommandsList();
    }
  }, [api]);

  const values = React.useMemo(
    () => ({
      username,
      setUsername,
      password,
      setPassword,
      api,
      setApi,
      channels,
      setChannels,
      client,
      setClient,
      connected,
      setConnected,
      saveChannelList,
      enabledCommands,
      setEnabledCommands,
      commands,
      setCommands,
    }),
    [
      username,
      setUsername,
      password,
      setPassword,
      api,
      setApi,
      channels,
      setChannels,
      client,
      setClient,
      connected,
      setConnected,
      saveChannelList,
      enabledCommands,
      setEnabledCommands,
      commands,
      setCommands,
    ]
  );
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
