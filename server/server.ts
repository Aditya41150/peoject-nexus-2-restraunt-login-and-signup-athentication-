import express from 'express';
import router from './routes';
import { connection } from './connection';
const app = express();
app.use(express.json());
app.use(router);
const port = 3001;


const uri = 'mongodb+srv://Aditya:1GpPZDyNJTkU9uWZ@cluster0.yjlw4be.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

(async function connectToMongoDb(){
    await connection(uri);
})().then(()=>console.log('Connected to the database')).catch((error)=>console.log('Error connecting to the database'))

app.get('/', (req, res) => {
  res.send('Hello World! ');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
