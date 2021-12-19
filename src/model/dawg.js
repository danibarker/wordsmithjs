// DICTIONARY = "/usr/share/dict/words"
QUERY = ['apple','cherry','banana','uncle']
let NextId = 0;
class DawgNode {

  constructor() {
    this.id = NextId;
    NextId += 1;
    this.final = false;
    this.edges = {};
  }
  toString() {
    let arr = [];
    if (this.final) {
      arr.push("1");
    } else {
      arr.push("0");
    }

    for (let [label, node] of Object.entries(this.edges)) {
      arr.push(label);
      arr.push(node.id.toString());
    }
    return arr.join("_");
  }

  eq(other) {
    return this.toString() == other.toString();
  }
}
class Dawg {
  constructor() {
    this.previousWord = "";
    this.root = new DawgNode();

    // Here is a list of nodes that have not been checked for duplication.
    this.uncheckedNodes = [];

    // Here is a list of unique nodes that have been checked for duplication.
    this.minimizedNodes = {};
  }
  insert(word) {
    if (word < this.previousWord) {
      throw Error("Error: Words must be inserted in alphabetical order.");
    }
    // find common prefix between word and previous word
    let commonPrefix = 0;
    for (let i = 0; i < Math.min(word.length, this.previousWord.length); i++) {
      if (word[i] != this.previousWord[i]) break;
      commonPrefix += 1;
    }
    // Check the uncheckedNodes for redundant nodes, proceeding from last
    // one down to the common prefix size. Then truncate the list at that
    // point.
    this._minimize(commonPrefix);

    // add the suffix, starting from the correct node mid-way through the
    // graph
    let node;
    if (this.uncheckedNodes.length === 0) {
      node = this.root;
    } else {
      node = this.uncheckedNodes[this.uncheckedNodes.length - 1][2];
    }
    for (let letter of word.substring(commonPrefix)) {
      let nextNode = new DawgNode();
      node.edges[letter] = nextNode;
      this.uncheckedNodes.push([node, letter, nextNode]);
      node = nextNode;
    }
    node.final = true;
    this.previousWord = word;
  }
  finish() {
    // minimize all uncheckedNodes
    this._minimize(0);
  }

  _minimize(downTo) {
    // proceed from the leaf up to a certain point
    for (let i = this.uncheckedNodes.length - 1; i > downTo - 1; i--) {
        console.log(this.uncheckedNodes.length, downTo)
      let [parent, letter, child] = this.uncheckedNodes[i];
      if (this.minimizedNodes[child]) {
        //replace the child with the previously encountered one
        parent.edges[letter] = this.minimizedNodes[child];
      } else {
        // add the state to the minimized nodes.
        this.minimizedNodes[child] = child;
      }
      this.uncheckedNodes.pop();
    }
  }

  lookup(word) {
    let node = this.root;
    for (let letter of word) {
      if (!node.edges[letter]) return false;
      node = node.edges[letter];
    }
    return node.final;
  }
  nodeCount() {
    return this.minimizedNodes.length;
  }

  edgeCount() {
    let count = 0;
    for (let node of Object.values(this.minimizedNodes)) {
      count += node.edges.length;
    }
    return count;
  }
}
let dawg = new Dawg();
let WordCount = 0;
let words = ["apple", "banana", "chicken"];
words.sort((a, b) => {
  if (a < b) return -1;
  else if (a > b) return 1;
  return 0;
});
for (let word of words) {
  WordCount += 1;
  dawg.insert(word);
}
dawg.finish();
EdgeCount = dawg.edgeCount();
console.log(dawg)
for (let word of QUERY) {
  if (!dawg.lookup(word)) {
    console.log(`${word} is not a word`);
  } else {
    console.log(`${word} is a word`);
  }
}
