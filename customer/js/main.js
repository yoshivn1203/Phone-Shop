const getEle = (id) => document.getElementById(id);

import { Service } from './service/phoneService.js';
const service = new Service();

const getListPhone = async () => {
  const res = await service.getPhones();
  return res.data;
};

const renderList = (data) => {
  let content = '';
  data.forEach((ele) => {
    content += ` <div class="col-lg-4 col-md-6">
    <div class="card text-black h-100">
      <img src=${ele.img} class="card-img" alt="Phone Image" />
      <div class="card-body">
        <div class="text-center">
          <h5 class="card-title">${ele.name}</h5>
          <p class="text-muted mb-4">$${ele.price}</p>
        </div>
        <div class="d-flex justify-content-start pt-3">
          <span><b>Screen:</b> ${ele.screen}</span>
        </div>
        <div class="d-flex justify-content-start pt-1">
          <span><b>Back Camera:</b> ${ele.backCamera}</span>
        </div>
        <div class="d-flex justify-content-start pt-1">
          <span><b>Front Camera:</b> ${ele.frontCamera}</span>
        </div>
        <div class="d-flex justify-content-start pt-1 pb-5">
          <span><b>Description:</b> ${ele.desc}</span>
        </div>
        <button type="button" class="btn btn-block btn-danger w-100">Add to cart</button>
      </div>
    </div>
  </div>`;
  });

  getEle('phoneList').innerHTML = content;
};

window.onload = async () => {
  const data = await getListPhone();
  renderList(data);
};

getEle('selectList').onclick = async () => {
  let filterData = [];
  const data = await getListPhone();
  const selectValue = getEle('selectList').value;
  if (selectValue == 'all') {
    filterData = data;
  } else {
    data.forEach((ele) => {
      if (ele.type == selectValue) {
        filterData.push(ele);
      }
    });
  }
  renderList(filterData);
};
