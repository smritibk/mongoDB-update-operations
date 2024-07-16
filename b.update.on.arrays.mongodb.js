use("kec-crude");

//? update on array

//? $push=> adds item at the end of an array

//? add 92 on marks of "Rajan"
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $push: {
//       marks: 92,
//     },
//   }
// );

//? add 87 and 93 to marks of suyasha
// db.scores.updateMany(
//   { name: "Suyasha" },
//   {
//     $push: {
//       marks: [87, 93],
//     },
//   }
// );

// db.scores.updateMany(
//   { name: "Smarika" },
//   {
//     $push: {
//       marks: { $each: [87, 93] },
//     },
//   }
// );

//? pop => removes items from the array
//? 1=> removes item from end of an array
//? -1=> removes item from front of an array

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $pop: {
//       marks: 1,
//     },
//   }
// );

//? $pull => removes item based upon condition
// db.scores.updateOne(
//   {
//     name: "Smarika",
//   },
//   {
//     $pull: {
//       marks: { $lt: 70 },
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       points: { sub: "Science" },
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   {
//     $set: {
//       "points.$.sub": "Maths", // here the '$' is the matching element
//     },
//   }
// );

//?pull item which has subject "Science" and marks less than 80 from "Rajan"
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $pull: {
//       points: { sub: "Science" },
//       marks: { $lt: 90 },
//     },
//   }
// );

//? $pullAll
//? we give concrete value which needs to be removed

// db.scores.updateOne(
//   { _id: ObjectId("66829b887138016a5f134b2a") },
//   {
//     $pullAll: {
//       marks: [42, 65],
//     },
//   }
// );

//? push 78, 67, 83 to the marks array of Rajan
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $push: { marks: { $each: [78, 67, 83] } },
//   }
// );

//? $addToSet => pushes the value to the array by ignoring the already stored values
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       marks: { $each: [95, 83, 88, 52] },
//     },
//   }
// );
//? for object
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       points: { sub: "Social", point: 93 },
//     },
//   }
// );



db.scores.find();
