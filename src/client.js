import tmi from "tmi.js";
import commands from "./commands";

export const createClient = (username, password, channels) => {
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

  client.on("message", (channel, _tags, message, self) => {
    if (self) return;

    if (message.startsWith("!") && message.length > 1) {
      let [, messagePart] = message.split("!");
      let [command, ...args] = messagePart.split(" ");

      if (commands.has(command)) {
        let messageToSend = commands.get(command)(...args);
        client.say(channel, messageToSend);
      }
    }
  });

  return client;
};
