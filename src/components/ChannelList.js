import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { SectionContainer } from "./SectionContainer";
const ChannelItem = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size:20px;
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
    font-size:20px;
  }
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
    <SectionContainer>
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
    </SectionContainer>
  );
};
export default ChannelList;
