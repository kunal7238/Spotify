const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(4000, ()=>{
    console.log('running on 4000 port');
})