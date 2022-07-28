export class Service {
  arr = [];

  getPhones = () => {
    return axios({
      url: 'https://run.mocky.io/v3/b2a54b78-e161-4e25-8287-180b4ac275ee',
      method: 'GET',
    });
  };
  getPhoneById = (id) => {
    return axios({
      url: `https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones/${id}`,
      method: 'GET',
    });
  };
  // getPhones = () => {
  //   return axios({
  //     url: 'https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones',
  //     method: 'GET',
  //   });
  // };
  // getPhoneById = (id) => {
  //   return axios({
  //     url: `https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones/${id}`,
  //     method: 'GET',
  //   });
  // };
}
