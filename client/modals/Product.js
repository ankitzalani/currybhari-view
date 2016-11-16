'use strict';

var Product = {
  name: String,
  description: String,
  category: new Category(),
  status: String,
  brand: new Brand(),
  info: String,
  uid: String,
  variants: Array,
  features: Array,
  keyFeatures: Array,
  active: { type: Boolean, default: true },
  updated: {type: Date, default: Date.now}
};
