export default function updateStudentGradeByCity(listObj, city, newGrades) {
  const filterCity = listObj.filter((obj) => obj.location === city);

  const newList = filterCity.map((obj) => {
    const newObj = { ...obj };
    newGrades.forEach((item) => {
      if (item.studentId === newObj.id) {
        newObj.grade = item.grade;
      }
    });
    if (!Object.prototype.hasOwnProperty.call(newObj, 'grade')) newObj.grade = 'N/A';
    return newObj;
  });
  return newList;
}
