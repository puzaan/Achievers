import mongoose from 'mongoose'
const dotenv =require( 'dotenv')
const Users = ('./data/user')
const  user = ('./model/userModel')
const connectDB =require('./database/db.js')


dotenv.config();
connectDB();

const importData = async() => {
    try {
        await user.deleteMany();

        const createdUser = await user.insertMany(Users);
        // to define admin user in database
        const adminUser = createdUser[0]._id;
        console.log('data imported in database')
    } catch (err) {
        console.error(`${err}`.red)
        process.exit(1)
    }
}
importData();