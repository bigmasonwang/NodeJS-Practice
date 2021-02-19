const express = require('express');
const path = require('path');
const rootDir = require('../util/path.js');
const router = express.Router();

const adminData = require('./admin.js');

router.get('/', (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop');
});

module.exports = router;
