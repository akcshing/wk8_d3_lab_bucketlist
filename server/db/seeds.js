use bucketlist;
db.dropDatabase();

db.bucketItem.insertMany(
  [
  {
    activity: "Visit Paris",
    location: "Paris",
    cost: 500
  },
  {
    activity: "Bungee jump",
    location: "Glasgow",
    cost: 80
  },
  {
    activity: "Skydive",
    location: "Perthshire",
    cost: 250
  }
]
);
