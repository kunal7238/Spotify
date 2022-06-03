const express = require('express');
const cors = require('cors');

app.use(express);
app.use(cosr());

app.listen(4000, ()=>{
    console.log('running on 4000 port');
})