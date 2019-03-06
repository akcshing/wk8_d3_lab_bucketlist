const PubSub = require("../helpers/pub_sub");
const BucketlistItemView = require("./bucketlist_item_view");


const BucketGridView = function (container) {
  this.container = container
}

BucketGridView.prototype.bindEvents = function () {
  PubSub.subscribe("Bucketlist:data-ready", (evt) => {
    this.renderList(evt.detail);
  })
};

BucketGridView.prototype.renderList = function (bucketlist) {
  this.container.innerHTML = "";
  bucketlist.forEach((bucketItem) => {
    const bucketListItem = new BucketlistItemView(this.container);
    bucketListItem.render(bucketItem)
  });
}

module.exports = BucketGridView;
