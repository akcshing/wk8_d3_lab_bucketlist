const RequestHelper = require("../helpers/request_helper");

const Bucketlist = function (url) {
  this.url = url
  this.request = new RequestHelper(this.url)
}



module.exports = Bucketlist;
