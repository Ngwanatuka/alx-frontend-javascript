/* eslint-disable no-shadow */
export default function createReportObject(employeesList) {
  const employeesObj = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return employeesObj;
}
