/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
