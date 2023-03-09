const express =  require('express');
const app = express();
const cors = require('cors');
const { userRouter } = require('./routes/userRoutes');

app.use(express.json());
app.use(cors());
const port  = 5000;

app.use("/api",userRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})