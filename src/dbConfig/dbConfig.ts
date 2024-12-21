import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL!}/nextjs`)
    const connection = mongoose.connection
    connection.on('connected', () => {
      console.log('MongoDB connected successfully')
    })
    connection.on('error', (err) => {
      console.log('MongoDB connection error')
      console.log(err)
      process.exit()
    })
  } catch (error) {
    console.log('Database connection failed')
    console.log(error)
  }
}
