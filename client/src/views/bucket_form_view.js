const PubSub = require('../helpers/pub_sub');

const BucketFormView = function (form) {
  this.form = form;
}

BucketFormView.prototype.bindEvents = function () {
  this.form.addEventListener("submit", (evt) => {
    this.handleSubmit(evt);
  })
};

BucketFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();

  const newItem = this.createItem(evt.target);
  PubSub.publish("BucketFormView:form-submitted", newItem);
  // console.log(newItem);
  evt.target.reset();
};

BucketFormView.prototype.createItem = function (form) {
  const newItem = {
    activity: form.activity.value,
    location: form.location.value,
    cost: form.cost.value
  };
  return newItem;
};

module.exports = BucketFormView;
