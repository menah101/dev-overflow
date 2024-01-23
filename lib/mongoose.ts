import mongoose from "mongoose";

let isConnected: boolean = false;

console.log(isConnected);

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
