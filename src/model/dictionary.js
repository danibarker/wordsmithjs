import axios from "axios";

// host = "http://localhost:5001/dictionary-c2faa/us-central1/api/";
export const handleCommand = async (host, command, data) => {
  command = encodeURIComponent(command);
  data = encodeURIComponent(data);

  const answer = await axios.get(
    host + `v2/command?command=${command}&word=${data}`
  );
  return answer.data;
};
export const getCommands = async (host) => {
  const answer = await axios.get(host + `commands`);
  return answer.data;
};
