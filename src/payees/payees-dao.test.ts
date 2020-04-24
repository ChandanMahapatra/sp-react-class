import dao from './payees-dao';
import fetchMock from 'jest-fetch-mock';

fetchMock.mockResponse(JSON.stringify(getPayees()));

test('any async call', () => {
  // expect.assertions(/* number of 'expects' */);
  // return /* some async call with expects in it */
})

test('Mocked fetch works', () => {
  expect.assertions(2);

  return dao.getPayees().then((payees) => {
    expect(payees.length).toBeGreaterThan(1);
    expect(payees.length).toEqual(3);
  });
});

function getPayees() {
  return [
    {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      version: 1,
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073',
      },
      active: true,
    },
    {
      firstName: 'Lucas',
      lastName: 'Trent',
      gender: 'male',
      dateOfBirth: '1983-02-12',
      id: '202',
      version: 1,
      address: {
        street: '8966 Telly Tunnel',
        city: 'Rickashire',
        state: 'OR',
        zip: '90822-8587',
      },
      active: true,
    },
    {
      firstName: 'Jack',
      lastName: 'Hawksmoor',
      gender: 'male',
      dateOfBirth: '1974-03-26',
      id: '203',
      version: 1,
      address: {
        street: '86853 Donnelly Circle',
        city: 'Annester',
        state: 'IA',
        zip: '42783',
      },
      active: true,
    }
  ];
}
