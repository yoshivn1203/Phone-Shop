export class Service {
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
}
