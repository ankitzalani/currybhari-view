'use strict';

var User = require("../modals/User");
var Product = require("../modals/Product");

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

Product.find(function(err, data) {
    if (!data || !data.length) {
        Product.create({
            "name": "namkeen",
            "description": "testing",
            "rate": "100",
            "image": "./images/home/1.jpg"
        }, {
            "name": "sev",
            "description": "namkeen",
            "rate": "200",
            "image": "./images/home/1.jpg"
        }, {
            "name": "Gulab Jamun",
            "description": "Gujrat",
            "rate": "460",
            "image": "./images/home/1.jpg"
        }, {
            "name": "Besan Laddu",
            "description": "Special Laddu",
            "rate": "570",
            "image": "./images/home/1.jpg"
        }, {
            "name": "Chakli",
            "description": "Diwali Chakli",
            "rate": "79",
            "image": "./images/home/1.jpg"
        }, {
            "name": "Pani Puri",
            "description": "Special Indore Pani Puri",
            "rate": "95.8",
            "image": "./images/home/1.jpg"
        }, {
            "name": "Vada",
            "description": "South Special",
            "rate": "100",
            "image": "./images/home/1.jpg"
        }, function() {
            console.log('Populating Products');
        });
    }
});
