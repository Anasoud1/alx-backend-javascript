export default function cleanSet(set, startString) {
  if (string === '') return '';
  const list = [...set].filter((element) => element.substring(0, string.length) === string);
  const arr = [];
  list.forEach((item) => arr.push(item.substring(string.length)));
  return arr.join('-');
}
