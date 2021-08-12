const express = require('express')
const cors = require('cors')
const connectDB =require('./database/db');
const dotenv = require('dotenv');
const color =('colors')
const formRoutes =require('./routes/formRoutes')
const userRoutes = require('./routes/userRoutes')
const {notFound, errorHandler} =require ('./middleware/errorMiddleware')

dotenv.config()
connectDB();

const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req, res)=> {
    res.send('server is running')
})
app.use('/api/form', formRoutes)
app.use('/api/users', userRoutes)
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000
app.listen(port, console.log('server is running ...'.green.bold))