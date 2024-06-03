import tmi from "tmi.js";
import * as dictionary from "./dictionary.js";
export const createClient = async (
  host,
  username,
  password,
  channels,
  setMessages
) => {
  // get list of commands from server
  let commandList;
  try {
    commandList = await dictionary.getCommands(host);
    console.log("commandList", commandList);
  } catch (error) {
    console.error("error getting commands", error);
  }

  console.log("channels", channels);
  let client = new tmi.Client({
    connection: {
      secure: true,
      reconnect: true,
    },
    identity: {
      username: username,
      password: password,
    },
    channels: channels,
  });
  client.on("join", (channel, username, self) => {
    if (self) {
      setMessages((curr) => [
        { tags: { username: "Bot" }, message: `Joined channel: ${channel}` },
        ...curr,
      ]);
    }
  });
  client.on("disconnected", (reason) => {
    setMessages((curr) => [
      { tags: { username: "Bot" }, message: `Disconnected: ${reason}` },
      ...curr,
    ]);
  });
  client.on("connected", (address) => {
    setMessages((curr) => [
      { tags: { username: "Bot" }, message: `Connected: ${address}` },
      ...curr,
    ]);
  });
  client.on("message", (channel, tags, message, self) => {
    setMessages((curr) => [{ message, tags }, ...curr]);
    if (self) return;
    if (message.startsWith("!") && message.length > 1) {
      console.log("this is where I think it is messing up");
      let [, messagePart] = message.split("!");
      let [command, ...args] = messagePart.split(" ");

      if (commandList.includes(command)) {
        dictionary.handleCommand(host, command, args.join(" ")).then((data) => {
          client.say(channel, data);
        });
      }
    }
  });

  return client;
};
