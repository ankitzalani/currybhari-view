'use strict';

var User = require("../modals/User");
var Product = require("../modals/Product");
var Slider = require("../modals/Slider");

User.find(function(err, data) {
    if (!data || !data.length) {
        User.create({
            provider: 'local',
            name: 'Ankit Zalani',
            email: 'ankit.littlegenius@gmail.com',
            password: 'ankit12345'
        }, {
            provider: 'local',
            role: 'admin',
            name: 'Pankaj Khandkar',
            email: 'pankajkhandkar@gmail.com',
            password: 'pankaj12345'
        }, function() {
            console.log('Populating Users');
        });
    }
});

Slider.find(function(err, data) {
  if (!data || !data.length) {
    Slider.create({
        name: 'Special Offer',
        description: '50% Off on all products before 2017',
        image: './images/home/girl3.jpg',
        redirectURL: ''
    },{
        name: 'Samosa Offer',
        description: '10% Off on Samosa',
        image: './images/home/girl2.jpg',
        redirectURL: ''
    },{
        name: 'Paytm Offer',
        description: '20% cashback on paytm',
        image: './images/home/girl3.jpg',
        redirectURL: ''
    });
  }
}, function() {
    console.log('Populating Slider');
});

Product.find(function(err, data) {
    if (!data || !data.length) {
        Product.create({
            "name": "Honey Chilli Potato",
            "description": "Yummy Potato with Honey and Chilli",
            "rate": 100,
            "image": "./images/food/HoneyChilliPotato.jpeg",
            "otherImages": []
        }, {
            "name": "Katori Chat",
            "description": "Chat with katori. Ohh yes you can eat both.",
            "rate": 60,
            "image": "./images/food/KatoriChat.jpeg",
            "otherImages": []
        }, {
            "name": "Gulab Jamun",
            "description": "Gujrat",
            "rate": 460,
            "image": "./images/home/1.jpg",
            "otherImages": ["./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg"]
        }, {
            "name": "Besan Laddu",
            "description": "Special Laddu",
            "rate": 570,
            "image": "./images/home/1.jpg",
            "otherImages": ["./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg"]
        }, {
            "name": "Chakli",
            "description": "Diwali Chakli",
            "rate": 79,
            "image": "./images/home/1.jpg",
            "otherImages": ["./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg"]
        }, {
            "name": "Pani Puri",
            "description": "Special Indore Pani Puri",
            "rate": 95.8,
            "image": "./images/home/1.jpg",
            "otherImages": ["./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg"]
        }, {
            "name": "Vada",
            "description": "South Special",
            "rate": 100,
            "image": "./images/home/1.jpg",
            "otherImages": ["./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg", "./images/home/1.jpg"]
        }, function() {
            console.log('Populating Products');
        });
    }
});
