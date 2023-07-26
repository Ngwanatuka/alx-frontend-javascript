// Function to stimulate uploading a photo (returns a promise)
function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

// Function to create a user (returns a promise)
function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}

export { uploadPhoto, createUser };
