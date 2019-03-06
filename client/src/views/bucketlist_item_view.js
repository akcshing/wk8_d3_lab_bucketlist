const PubSub = require("../helpers/pub_sub");

const BucketlistItemView = function (container) {
  this.container = container;
}

BucketlistItemView.prototype.render = function (item) {
  const bucketContainer = document.createElement("div");
  bucketContainer.id = 'bucketItem';

  const location = this.createElement("h3", item.location);
  const activity = this.createElement("p", item.activity);
  const cost = this.createElement("p", item.cost);

  bucketContainer.appendChild(location)
  bucketContainer.appendChild(activity)
  bucketContainer.appendChild(cost)

  this.container.appendChild(bucketContainer)

};

BucketlistItemView.prototype.createElement = function (element, text) {
  const newElement = document.createElement(element)
  newElement.textContent = text;
  return newElement

};

module.exports = BucketlistItemView;
