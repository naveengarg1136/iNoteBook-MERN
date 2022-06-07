const connectToMongo=require('./db');
const express = require('express');
var cors = require('cors');
const app = express();



app.use(cors())

connectToMongo();

const port = 5000
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use('/api/auth',require('./Routes/auth'));
app.use('/api/notes',require('./Routes/notes'));

app.listen(port, () => {
  console.log(`inotebook backend listening on port ${port}`)
})