import tmi from "tmi.js";
import commands from "./commands";
export const createClient = (username, password, channels) => {
  let client = new tmi.Client({
    options: { debug: false },
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
  client.on("connected", () => {
    console.log("hey you joined", client);
  });
  client.on("disconnected", () => {
    console.log("hey you left", client);
  });
  client.on("join", (a, b, c) => {
    if (c) {
      console.log("joined", a);
    }
  });
  client.on("message", (channel, _tags, message, self) => {
    if (self) return;
    console.log("message is", message);
    if (message.startsWith("!") && message.length > 1) {
      let [_, messagePart] = message.split("!");
      let [command, ...args] = messagePart.split(" ");
      if (commands.has(command)) {
        let messageToSend = commands.get(command)(args);
        client.say(channel, messageToSend);
      }
    }
  });

  return client;
};
