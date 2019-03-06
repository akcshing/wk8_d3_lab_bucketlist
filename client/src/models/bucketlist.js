const RequestHelper = require("../helpers/request_helper");
const PubSub = require('../helpers/pub_sub.js')

const Bucketlist = function (url) {
  this.url = url
  this.request = new RequestHelper(this.url)
}

Bucketlist.prototype.publish = function (bucketlist) {
  PubSub.publish("Bucketlist:data-ready", bucketlist)
};

 Bucketlist.prototype.getData = function () {
   this.request.get()
    .then(request => this.publish(request))
    .catch(console.error)
 };

 Bucketlist.prototype.addItem = function (newItem) {
   this.request.post(newItem)
   .then(request => this.publish(request))
   .catch(console.error)
 };

 Bucketlist.prototype.deleteItem = function (id) {
   this.request.delete(id)
   .then(request => this.publish(request))
   .catch(console.error)
 };

 Bucketlist.prototype.updateItem = function (id, newItem) {
   this.request.update(id, newItem)
   .then(request => this.publish(request))
   .catch(console.error)
 };

module.exports = Bucketlist;
