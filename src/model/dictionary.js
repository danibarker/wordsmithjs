import axios from 'axios'
let host = 'https://us-central1-dictionary-c2faa.cloudfunctions.net/api/'
export const define = async (stem, ...options) => {
  stem = encodeURIComponent(stem)
  const answer = await axios.get(host+`define/${stem}`)
  return answer.data
};
export const related = async (stem, ...options) => {
  stem = encodeURIComponent(stem)

  const answer = await axios.get(host+`related/${stem}`)
  return answer.data
};
export const beginsWith = async (stem, ...options) => {
  stem = encodeURIComponent(stem)

  const answer = await axios.get(host+`begins/${stem}`)
  return answer.data
};
export const contains = async (stem, ...options) => {
  stem = encodeURIComponent(stem)

  const answer = await axios.get(host+`contains/${stem}`)
  return answer.data
};
export const hidden = async (stem, ...options) => {};
export const pattern = async (stem, ...options) => {
  stem = encodeURIComponent(stem)

  const answer = await axios.get(host+`pattern/${stem}`)
  return answer.data
};
export const regex = async (stem, ...options) => {
  stem = encodeURIComponent(stem)

  const answer = await axios.get(host+`regex/${stem}`)
  return answer.data
};
export const endsWith = async (stem, ...options) => {
  stem = encodeURIComponent(stem)

  const answer = await axios.get(host+`ends/${stem}`)
  return answer.data
};
export const check = async (stem, ...options) => {
  stem = encodeURIComponent(stem)

  const answer = await axios.get(host+`check/${stem}`)
  return answer.data
};
export const hook = async (stem, ...options) => {
  stem = encodeURIComponent(stem)

  const answer = await axios.get(host+`hook/${stem}`)
  return answer.data
};
export const randomWord = async (stem, ...options) => {
  

  const answer = await axios.get(host+`random/${stem}`)
  return answer.data
};
export const anagram = async (rack, ...options) => {
  rack = encodeURIComponent(rack)

  const answer = await axios.get(host+`anagram/${rack}`)
  return answer.data
};
export const stem = async (rack, ...options) => {
  // to be implemented
};
export const crypto = async (cipher, ...options) => {
  // to be implemented
};
