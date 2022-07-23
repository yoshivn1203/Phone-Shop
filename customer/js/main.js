const getEle = (id) => document.getElementById(id);

import { Service } from './service/phoneService.js';
let service = new Service();

window.onload = () => {
  let content = '';

  service
    .getPhoneById(1)
    .then((res) => {
      content = res.data;
      console.log(content);
    })
    .catch((err) => {
      console.log(err);
    });

  // getEle('phoneList').innerHTML = 'zxczzxczxczxc';
};
