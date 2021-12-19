const csw = require("./src/csw.json");
const alpha = require("./src/alpha.json");

const commands = new Map();
const define = (stem, ...options) => {
  if (csw[stem]) {
    return `${stem}${csw[stem].csw ? "#" : ""}: ${csw[stem].definition}`;
  } else {
    return `${stem} is not a word`;
  }
};
const related = (stem, ...options) => {
  let allWords = Object.entries(csw);
  let re = new RegExp(`(?<![a-z])${stem}s?(?![a-z])`, "i");
  let filtered = allWords.filter((entry) => {
    let result = re.test(entry[1].definition);
    return result;
  });
  return filtered;
};

const beginsWith = (stem, ...options) => {
  return regex(`^${stem}`);
};

const contains = (stem, ...options) => {
  return regex(stem);
};

const hidden = (stem, ...options) => {};

const pattern = (stem, ...options) => {
  stem = stem.replace("*", ".+");
  stem = stem.replace("?", ".");
  return regex(`^${stem}$`);
};

const regex = (stem, ...options) => {
  let words = Object.keys(csw);
  let re = new RegExp(stem, "i");
  let output = [];
  for (let word of words) {
    if (word.match(re)) {
      output.push(word);
    }
  }
  return output;
};

const endsWith = (stem, ...options) => {
  return regex(`${stem}$`);
};

const check = (stem, ...options) => {
  return !!csw[stem];
};



const hook = (stem, ...options) => {
  if (csw[stem]) {
    return `Front hooks: ${csw[stem].frontHooks}\nBack hooks: ${csw[stem].backHooks}`;
  }
};

const randomWord = (wordLength, ...options) => {
  let words = Object.keys(csw);
  return define(words[Math.floor(Math.random() * words.length)]);
};

const anagram = (rack, ...options) => {
  return alpha[rack].join(" ");
};

const stem = (rack, ...options) => {
  // to be implemented
  console.log("nothing");
};

const crypto = (cipher, ...options) => {
  // to be implemented
};
commands.set("define", define);
commands.set("related", related);
commands.set("anagram", anagram);
commands.set("begins", beginsWith);
commands.set("ends", endsWith);
commands.set("random", randomWord);
commands.set("contains", contains);
commands.set("hidden", hidden);
commands.set("pattern", pattern);
commands.set("regex", regex);
commands.set("check", check);
commands.set("hook", hook);
commands.set("stem", stem);
commands.set("crypto", crypto);
module.exports = {
  commands,
  define,
  related,
  beginsWith,
  endsWith,
  pattern,
  check,
  hook,
  randomWord,
  anagram,
};
