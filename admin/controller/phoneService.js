export class Services {
  arr = [];
  getPhones() {
    return axios({
      url: 'https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones',
      method: 'GET',
    });
  }
  addPhone(phone) {
    return axios({
      url: 'https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones',
      method: 'POST',
      data: phone,
    });
  }
  deletePhone(id) {
    return axios({
      url: `https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones/${id}`,
      method: 'DELETE',
    });
  }
  getPhoneById(id) {
    return axios({
      url: `https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones/${id}`,
      method: 'GET',
    });
  }
  updatePhone(phone) {
    return axios({
      url: `https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones/${phone.id}`,
      method: 'PUT',
      data: phone,
    });
  }
}
