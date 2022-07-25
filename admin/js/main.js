const getEle = (id) => document.getElementById(id);

import { Helper } from './services/helper.js';
import { Services } from './services/phoneService.js';
import { Phone } from './model/phone.js';

const helper = new Helper();
const service = new Services();

const getListPhone = async () => {
  const res = await service.getPhones();
  return res.data;
};

const renderList = (phoneList) => {
  let content = '';
  phoneList.forEach((ele) => {
    content += ` <tr>
    <td>${ele.id}</td>
    <td><strong>${ele.name}</strong></td>
    <td>$${ele.price}</td>
    <td style="text-align: center"><img src=${ele.img} alt="phone-img" width="150" height="150"></td>
    <td>${ele.desc}</td>
    <td class = ''style="text-align: center"><button class="btn my-3 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModal" onclick ="btnEdit('${ele.id}')"  id='btnEdit'>
    Edit<i class="fa fa-pencil-square ms-2"></i>
    </button><button class="btn " onclick ="btnDelete('${ele.id}')" id='btnDelete'>
    Delete <i class="fa fa-trash ms-2"></i>
    </button></td>
    </tr>`;
  });
  getEle('tablePhone').innerHTML = content;
};

window.onload = async () => {
  const phoneList = await getListPhone();
  renderList(phoneList);
};

getEle('btnAddPhone').onclick = async () => {
  const inputs = helper.getInputValue();
  let phone = new Phone('', ...inputs);
  await service.addPhone(phone);
  const phoneList = await getListPhone();
  renderList(phoneList);
};

window.btnEdit = async (id) => {
  let res = await service.getPhoneById(id);
  console.log(res.data);
};
