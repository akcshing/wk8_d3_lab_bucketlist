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
  const button = this.createElement("button", "delete")

  this.deleteButton(button, item)

  bucketContainer.appendChild(location)
  bucketContainer.appendChild(activity)
  bucketContainer.appendChild(cost)
  bucketContainer.appendChild(button)

  this.container.appendChild(bucketContainer)

};

BucketlistItemView.prototype.createElement = function (element, text) {
  const newElement = document.createElement(element)
  newElement.textContent = text;
  return newElement
};

BucketlistItemView.prototype.deleteButton = function (button, item) {
  button.value = item._id;
  console.log(item)
  button.addEventListener('click', (evt) => {
    PubSub.publish("BucketlistItemView:delete-item", evt.target.value)
  })
  return button

};

module.exports = BucketlistItemView;
