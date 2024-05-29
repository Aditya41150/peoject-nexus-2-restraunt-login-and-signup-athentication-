import mongoose from 'mongoose';

export async function connection(uri: string){
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database');
    }
}