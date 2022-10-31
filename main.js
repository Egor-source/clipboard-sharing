require('dotenv')
    .config();
const express = require('express');
const ip = require('ip');
const fs = require('fs');
const notifier = require('node-notifier');
// const mongoose = require('mongoose');
// const authRouter = require('./auth/authRouter');
const clipboardSharingRouter = require('./clipboardSharing/clipboardSharingRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());
// app.use('/auth', authRouter);
app.use('/clipboard', clipboardSharingRouter);
app.use(errorMiddleware);

const start = async () => {
    try {
        // await mongoose.connect(process.env.DB_CONNECTION_STRING);
        app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
        if (process.argv[2] === 'prod') {
            const host = `http://${ip.address()}:${process.env.PORT}`;
            fs.writeFileSync(`${__dirname}/host.txt`, host);
            notifier.notify(host);
        }
    } catch (e) {
        console.log(e);
    }
};

start();

