/* eslint-disable no-unused-vars */
function getFullResponseFromAPI(success) {
  return new Promise((resove, reject) => {
    if (success) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resove(response);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
