import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { SectionContainer } from "./SectionContainer";
import { useData } from "../providers/DataProvider";
const ChannelItem = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: end;
`;
const AddNewItem = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
  input {
    width: 300px;
    padding: 0px 2px;
    background: #333;
    color: white;
    font-size: 20px;
  }
`;
const List = styled.ul`
  list-style-type: none;
`;

const ChannelList = () => {
  const [channelToAdd, setChannelToAdd] = useState("");
  const data = useData();
  const { channels, setChannels, saveChannelList } = data;

  return (
    <SectionContainer>
      <h1>Channel List</h1>
      <List>
        {channels.map((channel, index) => {
          return (
            <li key={channel}>
              <ChannelItem>
                <p>{channel}</p>
                <Button
                  onClick={() => {
                    let newChannelList = [...channels];
                    newChannelList.splice(index, 1);
                    saveChannelList(newChannelList);
                    setChannels(newChannelList);
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
            let newChannelList = [...channels, channelToAdd];
            saveChannelList(newChannelList);
            setChannels(newChannelList);
          }}
        >
          Add
        </Button>
      </AddNewItem>
    </SectionContainer>
  );
};
export default ChannelList;
