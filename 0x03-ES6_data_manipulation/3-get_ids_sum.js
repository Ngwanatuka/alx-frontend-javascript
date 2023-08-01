function getStudentsIdsSum(studentlist) {
  if (!Array.isArray(studentlist)) {
    return [];
  }

  return studentlist.reduce((acc, student) => acc + student.id, 0);
}

export default getStudentsIdsSum;
