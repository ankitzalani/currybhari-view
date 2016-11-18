'use strict';

var Coupon = {
  code: String,
  amount: Number,
  type: { type: String, default: 'Discount' },
  active: { type: Boolean, default: true },
  info: String,
  minimumCartValue: Number
};
