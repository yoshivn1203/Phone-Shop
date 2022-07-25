const getEle = (id) => document.getElementById(id);

import { Services } from './services/phoneService.js';

const service = new Services();

const getListPhone = async () => {
  const res = await service.getPhones();
  return res.data;
};

window.onload = async () => {
  const phoneList = await getListPhone();
  console.log(phoneList);
  renderList(phoneList);
};

const renderList = (phoneList) => {
  let content = '';
  phoneList.forEach((ele) => {
    content += ` <tr>
    <td>${ele.id}</td>
    <td>${ele.name}</td>
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
