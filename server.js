// express loading
const express = require('express');

// express를 실행하는 것을 app으로 상수화
const app = express();


// server.js 파일에서 라우트를 만들고 상수화 시킨다
// require(경로)를 ordersRoute와 productsRoute로 상수화 시킨다
const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');

app.use('/products', productsRoute)
app.use('/orders', ordersRoute)

// port는 3000번
const port = 3000;
// app중에 .listen모듈 실행, console.log를 통해 server가 실행되면 server started..프린트
app.listen(port, console.log("server started.."));