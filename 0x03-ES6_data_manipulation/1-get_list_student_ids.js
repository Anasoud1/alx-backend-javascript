export default function getListStudentIds(listObj) {
  if (!(listObj instanceof Array)) return [];
  return listObj.map((obj) => obj.id);
}
