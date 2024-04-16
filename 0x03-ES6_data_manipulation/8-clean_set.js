export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const list = [...set].filter((el) => el.substring(0, startString.length) === startString);
  const arr = [];
  list.forEach((item) => arr.push(item.substring(startString.length)));
  return arr.join('-');
}
