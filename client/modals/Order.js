'use strict';

var Order = {
  orderNo: String,
  name: String,
  info: String,
  uid: String,
  email: String,
  address: String,
  city: String,
  phone: String,
  payment: String,
  active: { type: Boolean, default: true },
  updated: {type: Date},
  orderDate: {type: Date, default: Date.now},
  status: Object({ name: String, val: Number}),
  items: [{ sku: String, name: String, packing: String, quantity: String, mrp: String, price: String, image: String, category: String }]
};
