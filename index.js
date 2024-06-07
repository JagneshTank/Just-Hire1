const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 7000;
const DB = 'mongodb://localhost:27017/JustHire';
const app = express();

app.use(express.json());

const authRouter = require("./routes/auth");
app.use(authRouter);

mongoose
.connect(DB)
.then(() => {
    console.log("Connection Sccessful");
})
.catch((e) => {
    console.log(e);
});

app.listen(PORT,"192.168.1.6",() => {
    console.log(`Connected to ${PORT}`);
});
