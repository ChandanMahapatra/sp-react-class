const baseUrl = 'http://localhost:8000/api/v1/banking/payees';

/*
promise.then(s1)
       .then(s2)
       .then(s3)
       .then(s4)
       .then(s5)
       .catch(e1)
*/

function getPayees() {
  return fetch(baseUrl)
    .then((response) => {
      // Successful HTTP response
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject({ message: 'Bad response code: ' + response.status });
      }
    })
    .catch((error) => {
      // Failed response
      console.error('DAO error: ', error);
      return Promise.reject({ message: 'DAO error' });
    });
}

async function getPayeesAsync() {
  try {
    const response = await fetch(baseUrl);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Bad response code: ' + response.status);
    }
    // Successful HTTP response
  } catch (error) {
    // Failed response
    console.error('DAO error: ', error);
    throw new Error('DAO error');
  }
}

const dao = {
  getPayees,
  getPayeesAsync,
};
export default dao;
