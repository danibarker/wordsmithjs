import styled from "styled-components";
import ChannelList from "../components/ChannelList";
// import CommandOptions from "../components/CommandOptions";
import ConnectionDetails from "../components/ConnectionDetails";
import CommandOptions from "../components/CommandOptions";
const SetupContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 60px;
  width: 90vw;
  margin: auto;
`;
const SetupPage = () => {
  return (
    <SetupContainer>
      <ChannelList />
      <ConnectionDetails />
      <CommandOptions />
    </SetupContainer>
  );
};

export default SetupPage;
