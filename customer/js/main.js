const getEle = (id) => document.getElementById(id);

import { Service } from './service/phoneService.js';
let service = new Service();

window.onload = () => {
  let content = '';

  service
    .getPhones()
    .then((res) => {
      let data = res.data;
      data.forEach((ele) => {
        content += `<div class="col-lg-4 col-md-6">
        <div class="card text-black h-100">
          <img src=${ele.img}
            class="card-img" alt="Phone Image" />
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">${ele.name}</h5>
              <p class="text-muted mb-4">$1000</p>
            </div>
              <div class="d-flex justify-content-start pt-3">
                <span><b>Screen:</b> ${ele.screen}</span>
              </div>
              <div class="d-flex justify-content-start pt-1">
                <span><b>Back Camera:</b>Back Camera: ${ele.backCamera}</span> 
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
    })
    .catch((err) => {
      console.log(err);
    });
};
