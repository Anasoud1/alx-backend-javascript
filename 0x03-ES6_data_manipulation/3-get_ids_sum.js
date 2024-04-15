export default function getStudentIdsSum(listObj) {
  return listObj.reduce((accumulator, obj) => accumulator + obj.id, 0);
}
