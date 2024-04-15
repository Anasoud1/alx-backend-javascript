export default function getStudentsByLocation(listObj, loc) {
  return listObj.filter((obj) => obj.location === loc);
}
