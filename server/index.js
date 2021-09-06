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
const followUpRoutes = require('./routes/followUpRoutes')
const {notFound, errorHandler} =require ('./middleware/errorMiddleware');
const internshipRoutes = require('./routes/internshipRoutes')
const { sendEmail } = require('./middleware/mail');
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser')
const fs = require('fs')
const multer = require('multer')
dotenv.config()
connectDB();


const app = express();
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

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
// app.use('/api/followup', followUpRouter);
app.use('/api/follow', followUpRoutes)

app.post("/api/sendMail", (req, res) => {

    console.log(req.body)
    sendEmail(req.body.email, req.body.subject )

})


app.use(notFound);
app.use(errorHandler);

// if api is not found
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Cant find ${req.originalUrl} on server`
    })
})
const port = process.env.PORT || 5000
app.listen(port, console.log('server is running ...'.green.bold))
