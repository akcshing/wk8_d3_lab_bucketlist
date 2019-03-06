const Bucketlist = require('./models/bucketlist');

document.addEventListener("DOMContentLoaded", () => {
  const bucketlist = new Bucketlist("http://localhost:3000/api/bucketlist");
  bucketlist.getData();
  console.log('loaded')

})
