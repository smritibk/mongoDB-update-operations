use("kec-crude");

//? $ operator
//? $ => element which match the document

// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Maths" },
//   {
//     $set: {
//       "points.$.sub": "Stats",
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   {
//     $set: {
//       "points.$.point": 95,
//     },
//   }
// );

//? update subject from "C++" to "MERN" and point to 69 from Smarika's data
// db.scores.updateOne(
//   { name: "Smarika", "points.sub": "C++" },
//   {
//     $set: {
//       "points.$.sub": "MERN",
//       "points.$.point": 69,
//     },
//   }
// );

// //? update points to 70 for each sub of Smarika
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $set: {
//       "points.$[].point": 70, // the use of [] is to
//     },
//   }
// );

// //? update point to 75 for each sub which has point below 70 for Suyasha
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $max: {
//       "points.$[].point": 70,
//     },
//   }
// );

// //* alternative code
// db.scores.updateOne(
//     { name: "Suyasha" },
//     {
//       $set: {
//         "points.$[element].point": 75,
//       },
//     },
//     {
//       arrayFilters: [{ "element.point": { $lt: 70 } }],
//     }
//   );

//? decrease each marks of Rajan by 10
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $inc: {
//       "marks.$[]": -10,
//     },
//   }
// );

//? set 57 marks to 77 to Suyasha's marks
// db.scores.updateOne(
//   { name: "Suyasha", marks: 57 },
//   {
//     $set: {
//       "marks.$": 77,
//     },
//   }
// );
//? decrease each marks which are less than 90 by 10 marks for Smarika
db.scores.updateOne(
  {
    name: "Smarika",
  },
  {
    $inc: {
      "marks.$[element]": -10,
    },
  },
  {
    arrayFilters: [{ element: { $lt: 90 } }],
  }
);

db.scores.find();
