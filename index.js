const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const ejs = require('ejs');
const layouts = require('express-ejs-layouts');
//controller page links 
const indexController = require('./controller/indexController');
const silverUtensilsController = require('./controller/silverUtensilsController');
const silverJewelleryController = require('./controller/silverJewelleryController');
const imageDisplayController = require('./controller/imageDisplayController');
const antiqueSilverUtensilsController = require('./controller/antiqueSilverUtensilsController');
const searchController = require('./controller/searchController');
//controller page link ends 
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
app.get('/silverUtensils',silverUtensilsController.getSilverUtensils);
app.get('/silverJewellery',silverJewelleryController.getSilverJewellery);
app.get('/imageObjectModel',(req,res)=>{
    res.sendFile(path.join(__dirname,'model/imageObjectModel.json'));
});
app.get('/image/:id',imageDisplayController.getImageDisplay);
app.get('/search/:id',searchController.getSearch);
app.get('/antiqueSilverUtensils',antiqueSilverUtensilsController.getAntiqueSilverUtensils);
app.get('/*',(req,res)=>{
    if(res.status===404){
        res.send('error file not found');
    }else{res.send('may be some error occured');}
});


app.listen(port,()=>{
    console.log(`your server is running on port ${port}`);
});
