const mongoose = require('mongoose')


// mongoose.set('strictQuery', false);
const connectDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

// https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict


// // Define the database URL to connect to.
// const mongoDB = "mongodb://127.0.0.1/my_database";

// // Wait for database to connect, logging an error if there is a problem 
// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect(mongoDB);
// }

module.exports = connectDb