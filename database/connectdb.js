import mongoose from 'mongoose'
try {
    console.log(process.env.URI_MONGO);
    await mongoose.connect(process.env.URI_MONGO)
    console.log('Connect DB 👌');
} catch (error) {
    console.log('Error de conexión a MongoDB: ' + error);
}