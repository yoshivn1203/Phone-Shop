export class Service {
  arr = [];

  getPhones = () => {
    return axios({
      url: 'https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones',
      method: 'GET',
    });
  };
  getPhoneById = (id) => {
    return axios({
      url: `https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones/${id}`,
      method: 'GET',
    });
  };
}
