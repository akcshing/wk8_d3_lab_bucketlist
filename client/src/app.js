const Bucketlist = require('./models/bucketlist');
const BucketGridView = require("./views/bucket_grid_view");
const BucketFormView = require("./views/bucket_form_view");

document.addEventListener("DOMContentLoaded", () => {

  const bucketListForm = document.querySelector("#form");
  const bucketListFormView = new BucketFormView(bucketListForm);
  bucketListFormView.bindEvents();

  const bucketlistContainer = document.querySelector("#bucket-grid-view")
  const bucketListGridView = new BucketGridView(bucketlistContainer);
  bucketListGridView.bindEvents();

  const bucketlist = new Bucketlist("http://localhost:3000/api/bucketlist");
  bucketlist.getData();
  bucketlist.bindEvents();
  console.log('loaded')
})
