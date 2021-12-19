import csw from './csw.json'
import twl from './twl.json'


const commands = new Map()
const define = (word) => {
  
  word = word[0].toUpperCase()
  if (twl[word]) {
    return `${word}: ${twl[word].definition}`
  } else {
    return `${word} is not a word`
  }
}
commands.set("define",define)

export default commands