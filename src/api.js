// import axios from "axios";
// export async function equity(rack, lexicon) {
  
//   let parameters = { rack: rack, lexicon: lexicon };
//   let response = await axios.get(
//     "https://cross-tables.com/leaves_values.php",
//     (headers = { "User-Agent": "wordsmith-bot" }),
//     (params = parameters)
//   );
//   let values = await response.json();
//   try {
//     let retVal = [values["rack"], values["rack-value"]];
//     return retVal;
//   } catch {
//     return response.text;
//   }
// }

// export async function predict(config, name, opponent) {
//   authorization = {
//     Authorization: "Bearer " + config.api_token,
//     "Client-Id": config.client_id,
//   };
//   parameters = { login: name };
//   response = await axios.get(
//     "https://api.twitch.tv/helix/users",
//     (headers = authorization),
//     (params = parameters)
//   );
//   values = await response.json();
//   try {
//     broadcasterID = values["id"];
//     player = values["display_name"];
//   } catch {
//     return values["status"] + " " + values["message"];
//   }
//   outcomes = [{ title: player }, { title: opponent }];
//   parameters = {
//     broadcaster_id: broadcasterID,
//     title: "Who will win?",
//     outcomes: outcomes,
//     prediction_window: 300,
//   };
//   response = await axios.get(
//     "https://api.twitch.tv/helix/predictions",
//     (headers = authorization),
//     (params = parameters)
//   );
//   values = await response.json();
//   try {
//     let retValue = values["title"] + ": " + values["status"];
//     return retValue;
//   } catch {
//     let retValue = values["status"] + " " + values["message"];
//     return retValue;
//   }
// }
