//const { StreamingQuerystring } = require('formidable/parsers');
//const { Db } = require('mongodb');
// var mongoose =require('mongoose');
// mongoose.connect("mongodb://localhost:27017/blog")
// .then(()=>{
//     console.log("connected to database");
// })
// .catch(()=>{
//     console.log("Error found");
// });

// const tut=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//     },
//     gender:
//     {
//         type:String,
//         required:true,
//     },
//     age:{
//         type:Number,
//         required:false,
//     }

// })

// collection =mongoose.model('s',tut);

//blog.collection.remove();
// data=[
//     {
//         name:"hii",
//         gender:"male",
//         age:20,

//     },
//     {
//         name:"hamsi",
//         gender:"female",
//     },
// ]
// collection.insertMany(data)




// var url = "mongodb://localhost:27017/";
 
// // create a client to mongodb
// var MongoClient = require('mongodb').MongoClient;
 
// // make client connect to mongo service
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     // db pointing to newdb
//     console.log("Switched to "+db.databaseName+" database");
//     // create 'users' collection in newdb database
//     db.createCollection("users", function(err, result) {
//         if (err) throw err;
//         console.log("Collection is created!");
//         // close the connection to db when you are done with it
//         db.close();
//     });
// });



// URL at which MongoDB service is running
// var url = "mongodb://localhost:27017/";
 
// // A Client to MongoDB
// var MongoClient = require('mongodb').MongoClient;
 
// // Make a connection to MongoDB Service
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Connected to MongoDB!");
//   db.close();
// });



const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const {MongoClient} =require('mongodb');


const uri='mongodb://localhost:27017';
const dbName='blog';
const fs=require('fs');
const csv=require('csv-parser');
const client=new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});
const dataToInsert ={name:'John Doe',age:30,email:'john@example.com'};
async function main(){
	try{
		await client.connect();
		console.log('connected to MongoDB server');
		const db=client.db(dbName);
		const collection =db.collection('users');
		const result =await collection.insertOne(dataToInsert);
		const h=await collection.insertOne({name:'Hkkl',age:2,email:'neeku@enduku'});
	
		
		console.log(`${result.jsonData} documents inserted`);

	}catch(error){
		console.error('Error',error);
	}
	finally{
		await client.close();
		console.log('Connection closed');
	}
}
main();





// // Use connect method to connect to the server
// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
//   if (err) {
//     console.error('Error occurred while connecting to MongoDB', err);
//     return;
//   }
//   console.log('Connected successfully to server');

//   const db = client.db(blog);
//   const collection = db.collection('users');
//   const h=collection.insertOne({name:'newdata',age:5,email:'wee@123'});
  
//   // Read the CSV file and save its content to MongoDB
// //   fs.createReadStream('data.csv')
// //     .pipe(csv())
// //     .on('data', (row) => {
// //       // Define keys for each column
// //       const keys = ['customer_id','category','brand','price','rating','date']; // Define your keys here

// //       // Create an object with keys and row values
// //       const data = {};
// //       keys.forEach((key, index) => {
// //         data[key] = Object.values(row)[index]; // Assuming the order matches
// //       });

// //       // Insert each row as a document in MongoDB
// //       collection.insertOne(data, (err, result) => {
// //         if (err) {
// //           console.error('Error occurred while inserting document', err);
// //         } else {
// //           console.log('Inserted document into MongoDB');
// //         }
// //       });
// //     })
// //     .on('end', () => {
// //       console.log('CSV file successfully processed');
// //       client.close();
// //     });
// });
