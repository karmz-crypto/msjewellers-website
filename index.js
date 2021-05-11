const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 5000;

const app = express();
//app.use(morgan('dev'));

//app.use(express.static(__dirname+'/static_folder/html'));
app.use(express.static(__dirname+'/static_folder/images'));
app.use(express.static(__dirname+'/static_folder/js'));

app.get('/',(req,res)=>{
  
    res.sendFile(path.join(__dirname,'static_folder/html/index.html'));
    
    //res.sendFile(__dirname,'/index.html');
    
});

app.get('/silverUtensils',(req,res)=>{
    
  
    res.sendFile(path.join(__dirname,'static_folder/html/silverUtensils.html'));
});


app.listen(port,()=>{
    console.log(`your server is running on port ${port}`);
});
