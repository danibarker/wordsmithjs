import csw from "./csw.json";
import alpha from "../alpha.json";

export const define = (stem, ...options) => {
  stem = stem.toUpperCase();
  if (csw[stem]) {
    return `${stem}${csw[stem].csw ? "#" : ""}: ${csw[stem].definition}`;
  } else {
    return `${stem} is not a word`;
  }
};
export const related = (stem, ...options) => {
  let allWords = Object.entries(csw);
  let re = new RegExp(`(?<![a-z])${stem}s?(?![a-z])`, "i");
  let filtered = allWords.filter((entry) => {
    let result = re.test(entry[1].definition);
    return result;
  });

  return filtered.map((word) => word[0]).join(" ");
};
export const beginsWith = (stem, ...options) => {
  return regex(`^${stem}`);
};
export const contains = (stem, ...options) => {
  return regex(stem);
};
export const hidden = (stem, ...options) => {};
export const pattern = (stem, ...options) => {
  stem = stem.replace("*", ".+");
  stem = stem.replace("?", ".");
  return regex(`^${stem}$`);
};
export const regex = (stem, ...options) => {
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
export const endsWith = (stem, ...options) => {
  return regex(`${stem}$`);
};
export const check = (stem, ...options) => {
  stem = stem.toUpperCase();
  return !!csw[stem];
};
export const hook = (stem, ...options) => {
  stem = stem.toUpperCase();
  if (csw[stem]) {
    return `Front hooks: ${csw[stem].frontHooks}\nBack hooks: ${csw[stem].backHooks}`;
  }
};
export const randomWord = (wordLength, ...options) => {
  let words = Object.keys(csw);
  return define(words[Math.floor(Math.random() * words.length)]);
};
export const anagram = (rack, ...options) => {
  rack = rack.toUpperCase();
  rack = rack
    .split("")
    .sort((a, b) => {
      if (a < b) {
        return -1;
      }
      return 1;
    })
    .join("");
  let words;
  if (/[^A-Z]/.test(rack)) {
    
  } else {
    words = alpha[rack];
  }
  if (words) {
    return words.join(" ");
  }
  return "0 words found";
};
export const stem = (rack, ...options) => {
  // to be implemented
};
export const crypto = (cipher, ...options) => {
  // to be implemented
};
