const RequestHelper = function (url) {
  this.url = url
};

RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then(response => console.log(response))
};


module.exports = RequestHelper;
