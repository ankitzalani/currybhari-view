'use strict';

var Category {
  name: String,
  info: String,
  parentCategory: Number,
  image: String,
  uid: String,
  category: Number,
  active: { type: Boolean, default: true },
  updated: {type: Date, default: Date.now},
  sub_categories: [{}]
};
