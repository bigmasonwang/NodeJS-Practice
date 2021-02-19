const http = require('http');
const express = require('express');
const path = require('path');
const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();

app.use(express.urlencoded({ extended: true }));

// make /public static
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
