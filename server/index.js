const express = require('express')
const cors = require('cors')
const connectDB =require('./database/db');
const dotenv = require('dotenv');
const color =('colors')
const path = require('path');
const formRoutes =require('./routes/formRoutes')
const userRoutes = require('./routes/userRoutes')
const counselingRoutes = require('./routes/counselingRoutes')
const demoScedualRoutes = require('./routes/demoScedualRoutes');
const {notFound, errorHandler} =require ('./middleware/errorMiddleware');
const internshipRoutes = require('./routes/internshipRoutes')

dotenv.config()
connectDB();

const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded())
//if we are using EC6 
//const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.get('/', (req, res)=> {
    res.send('server is running')
})
app.use('/api/form', formRoutes);
app.use('/api/users', userRoutes);
app.use('/api/counseling', counselingRoutes);
app.use('/api/scedual', demoScedualRoutes);
app.use('/api/intern', internshipRoutes);
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000
app.listen(port, console.log('server is running ...'.green.bold))
