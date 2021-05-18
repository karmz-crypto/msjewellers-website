const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const ejs = require('ejs');
const layouts = require('express-ejs-layouts');
const indexController = require('./controller/indexController');
const silverUtensilsController = require('./controller/silverUtensilsController');
const silverJewelleryController = require('./controller/silverJewelleryController');
const port = process.env.PORT || 5000;

const app = express();
//app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.use(layouts);

//app.use(express.static(__dirname+'/static_folder/html'));
app.use(express.static(__dirname+'/static_folder/images'));
app.use(express.static(__dirname+'/static_folder/js'));
//app.use(express.static(__dirname+'/static_folder/css'));
/*
app.get('/',(req,res)=>{
  
    res.sendFile(path.join(__dirname,'static_folder/html/index.html')); //this is working code to fetch index page
    
    //res.sendFile(__dirname,'/index.html');
    
});
*/
app.get('/',indexController.getIndex);

/*
app.get('/silverUtensils',(req,res)=>{
    
  
    res.sendFile(path.join(__dirname,'static_folder/html/silverUtensils.html'));
});
*/
app.get('/silverUtensils',silverUtensilsController.getSilverUtensils);
app.get('/silverJewellery',silverJewelleryController.getSilverJewellery);


app.listen(port,()=>{
    console.log(`your server is running on port ${port}`);
});
