/* eslint-disable no-template-curly-in-string */
export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [`${departmentName}`]: employees,
  };
  return employeesObject;
}
