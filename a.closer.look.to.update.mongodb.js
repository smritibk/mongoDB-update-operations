use("kec-crude");

//? $set

// db.scores.updateOne(
//     { name: "Shubham" },
//     {
//         $set: {
//             name: "Rajan",
//         },
//     }
// );

// db.scores.updateMany(
//   {},    //to select all the available values
//   {
//     $set: {
//       age: 21,
//     },
//   }
// );

//? $unset => removes that field

// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $unset: {
//       age: "",
//     },
//   }
// );

//? update age of Rajan to 30
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $set: {
//       age: 30,
//     },
//   }
// );

//? update age of Suyasha to 40
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $set: {
//       age: 40,
//     },
//   }
// );

//? $inc => increase the value of field by the provided value
// db.scores.updateMany(
//   { name: "Smarika" },
//   {
//     $inc: { age: -10 },
//   }
// );

//? $mul => multiply
// db.scores.updateOne(
//   { _id: ObjectId("66829b887138016a5f134b2a") },
//   {
//     $mul: {
//       age: 2,
//     },
//   }
// );

//? divide age of Suyasha by 2
// db.scores.updateOne(
//   { _id: ObjectId("66829980c33709c049bad114") },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );

//? $rename => renaming the field
// db.scores.updateMany(
//   {},
//   {
//     $rename: { scores: "marks" },
//   }
// );

//? $min, $max

//? $min => if field value is more than specified value, it sets min value to that field
// db.scores.updateMany(
//   {},
//   {
//     $min: { age: 25 },
//   }
// );

//? $max => if field value is less than specified value, it sets max value to that field

// db.scores.updateMany(
//   {},
//   {
//     $max: { age: 50 },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       luckyThings: {
//         number: 7,
//         color: "green",
//       },
//     },
//   }
// );

//? update lucky number of Suyasha to 8
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $set: {
//       "luckyThings.number": 8,
//     },
//   }
// );

//? update lucky color of Smarika to "blue"
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $set: {
//       "luckyThings.color": "blue",
//     },
//   }
// );

db.scores.updateOne({name:"Rajan"},{
    $inc:{
        "luckyThings.number":8
    }
})

db.scores.find();
