import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
const ChannelItem = styled.div`
  display: flex;
  gap: 20px;
  p {
    margin: 0;
  }
`;
const AddNewItem = styled.div`
  display: flex;
  margin: 20px;
`;
const List = styled.ul`
  list-style-type: none;
`;
const ChannelList = () => {
  const [channelList, setChannelList] = useState([]);
  const [channelToAdd, setChannelToAdd] = useState("");
  useEffect(() => {
    let loaded = JSON.parse(localStorage.getItem("channels"));
    if (loaded) {
      setChannelList(loaded);
    }
  }, []);
  const saveChannelList = (newList) => {
    localStorage.setItem("channels", JSON.stringify(newList));
  };
  return (
    <div>
      <h1>Channel List</h1>
      <List>
        {channelList.map((channel, index) => {
          return (
            <li key={channel}>
              <ChannelItem>
                <p>{channel}</p>
                <Button
                  onClick={() => {
                    let newChannelList = [...channelList];
                    newChannelList.splice(index, 1);
                    saveChannelList(newChannelList);
                    setChannelList(newChannelList);
                  }}
                >
                  Remove
                </Button>
              </ChannelItem>
            </li>
          );
        })}
      </List>
      <AddNewItem>
        <input
          value={channelToAdd}
          onChange={(e) => {
            setChannelToAdd(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            let newChannelList = [...channelList, channelToAdd];
            saveChannelList(newChannelList);
            setChannelList(newChannelList);
          }}
        >
          Add
        </Button>
      </AddNewItem>
    </div>
  );
};
export default ChannelList;
