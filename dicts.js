// const fs = require("fs");
// let csw = fs.readFileSync("./src/twl.dat", { encoding: "ascii" });
// let words = csw.split("\n");
// let wordDict = {};
// for (let single of words) {
//   let parts = single.split("\t");
//   let [word, definition, frontHooks, backHooks, prob, alphagram] = parts;
//   if (wordDict[alphagram]) {
//     wordDict[alphagram].push(word)
//   } else {
//     wordDict[alphagram] = [word]
//   }
// }
// fs.writeFileSync('twl.json', JSON.stringify(wordDict))
