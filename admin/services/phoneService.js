export class Services {
  getPhones = async () => {
    try {
      const res = await axios({
        url: 'https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones',
        method: 'GET',
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  addPhone = async (phone) => {
    try {
      await axios({
        url: 'https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones',
        method: 'POST',
        data: phone,
      });
    } catch (err) {
      console.log(err);
    }
  };

  deletePhone = async (id) => {
    try {
      await axios({
        url: `https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones/${id}`,
        method: 'DELETE',
      });
    } catch (err) {
      console.log(err);
    }
  };

  getPhoneById = async (id) => {
    try {
      const res = await axios({
        url: `https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones/${id}`,
        method: 'GET',
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  updatePhone = async (phone) => {
    try {
      await axios({
        url: `https://62dabe8ee56f6d82a768e4fc.mockapi.io/Phones/${phone.id}`,
        method: 'PUT',
        data: phone,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
