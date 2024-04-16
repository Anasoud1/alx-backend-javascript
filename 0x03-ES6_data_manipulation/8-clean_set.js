export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const list = [...set].filter((el) => el.substring(0, startString.length) === startString);
  const arr = [];
  list.forEach((item) => arr.push(item.substring(startString.length)));
  return arr.join('-');
}
