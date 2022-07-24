const getEle = (id) => document.getElementById(id);

import { Service } from './service/phoneService.js';
import { CartProduct } from './model/cartProduct.js';
import { Product } from './model/product.js';

const service = new Service();
let cart = [];

const getListPhone = async () => {
  const res = await service.getPhones();
  return res.data;
};

const renderList = (phoneList) => {
  let content = '';
  phoneList.forEach((ele) => {
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
        <button type="button" class="btn btn-block w-100" onclick ="btnAddToCart('${ele.id}')">Add to cart</button>
      </div>
    </div>
  </div>`;
  });
  getEle('phoneList').innerHTML = content;
};

const renderCart = (cart) => {
  let content = '';
  cart.forEach((ele) => {
    content += `<div class="product">
  <div class="product__1">
    <div class="product__thumbnail">
      <img src=${ele.product.img} 
        alt="Italian Trulli">
    </div>
    <div class="product__details">
      <div style="margin-bottom: 8px;"><b>${ele.product.name}</b></div>
      <div style="font-size: 90%;">Screen: <span class="tertiary">${
        ele.product.screen
      }</span></div>
      <div style="font-size: 90%;">Back Camera: <span class="tertiary">${
        ele.product.backCamera
      }</span></div>
      <div style="font-size: 90%;">Front Camera: <span class="tertiary">${
        ele.product.frontCamera
      }</span></div>
      <div style="margin-top: 8px;"><a href="#" onclick ="btnRemovePhone('${
        ele.product.id
      }')">Remove</a></div>
    </div>
  </div>
  <div class="product__2">
    <div class="qty">
      <span><b>Quantity:</b> </span> &nbsp &nbsp
      <span class="minus bg-dark" onclick ="btnMinus('${ele.product.id}')">-</span>
      <span class="quantityResult mx-2">${ele.quantity}</span>
      <span class="plus bg-dark" onclick ="btnAdd('${ele.product.id}')">+</span>
    </div>
    <div class="product__price"><b>$${ele.quantity * ele.product.price}</b></div>
  </div>
</div>`;
  });
  getEle('cartList').innerHTML = content;
};

const calculateSubTotal = (cart) => {
  let subTotal = 0;
  cart.forEach((ele) => {
    subTotal += ele.product.price * ele.quantity;
  });
  return subTotal;
};

window.onload = async () => {
  const phoneList = await getListPhone();
  renderList(phoneList);
};

getEle('selectList').onclick = async () => {
  const data = await getListPhone();
  const selectValue = getEle('selectList').value;
  let filterData =
    selectValue == 'all' ? data : data.filter((ele) => ele.type == selectValue);
  renderList(filterData);
};

window.btnAddToCart = async (productId) => {
  let quantity = 0;
  const res = await service.getPhoneById(productId);
  const { id, name, price, screen, backCamera, frontCamera, img, desc, type } = res.data;
  const product = new Product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
  const cartItem = new CartProduct(product, 1);
  cart.forEach((ele) => {
    if (ele.product.id == cartItem.product.id) {
      ele.quantity++;
      quantity = ele.quantity;
      return;
    }
  });
  if (quantity < 1) {
    cart.push(cartItem);
  }
  getEle('subTotal').innerHTML = '$' + calculateSubTotal(cart);
  renderCart(cart);
};

window.btnAdd = (id) => {
  cart.forEach((ele) => {
    if (ele.product.id == id) {
      ele.quantity++;
      return;
    }
  });
  getEle('subTotal').innerHTML = '$' + calculateSubTotal(cart);
  renderCart(cart);
};

window.btnMinus = (id) => {
  cart.forEach((ele) => {
    if (ele.product.id == id) {
      ele.quantity--;
      return;
    }
  });
  cart = cart.filter((ele) => ele.quantity != 0);
  getEle('subTotal').innerHTML = '$' + calculateSubTotal(cart);
  renderCart(cart);
};

window.btnRemovePhone = (id) => {
  cart = cart.filter((ele) => ele.product.id != id);
  renderCart(cart);
};
