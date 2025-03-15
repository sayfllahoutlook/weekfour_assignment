function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'success' });
        } else {
            reject(new Error('The API is not working'));
        }
    });
}

// Example usage:
getFullResponseFromAPI(true)
    .then(response => console.log(response))
    .catch(error => console.error(error.message));

getFullResponseFromAPI(false)
    .then(response => console.log(response))
    .catch(error => console.error(error.message));
