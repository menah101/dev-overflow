import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
let isConnected: boolean = false;
export const connectToDatabase  = async () => {
  mongoose.set('strictQuery', true)

  if(!process.env.MONGODB_URL) {
    return console.log('MISSING MONGODB_URL');
  }


  try {
    await mongoose.connect(process.env.MONGODB_URL,  {
      dbName: 'devflow'
    })
    console.log('MongoDB is already connected')
    isConnected = true;
  } catch (error) {
    
  }
}
