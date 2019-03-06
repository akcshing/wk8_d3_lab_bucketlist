const RequestHelper = require("../helpers/request_helper");
const PubSub = require('../helpers/pub_sub.js')

const Bucketlist = function (url) {
  this.url = url
  this.request = new RequestHelper(this.url)
}

Bucketlist.prototype.bindEvents = function () {
  PubSub.subscribe("BucketFormView:form-submitted", (evt) => {
    this.addItem(evt.detail)
  })
  PubSub.subscribe("BucketlistItemView:delete-item", (evt) => {
    // console.log(evt.detail)
    this.deleteItem(evt.detail)
  })
  PubSub.subscribe("BucketlistItemView:status-update", (evt) => {
    this.updateItem(evt.detail._id, evt.detail)
  })
};

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
   delete newItem["_id"];
   console.log("new item", newItem)
   this.request.update(id, newItem)
   .then(request => this.publish(request))
   .catch(console.error)
 };

module.exports = Bucketlist;
