var express=require('express');
var mongoose=require('mongoose');
var cors=require('cors');
var app=express();

var userController=require('./Controllers/userController.js');

var config=require('./Config');
app.set('port',4000);
app.use(cors());

app.use('/user',userController);

mongoose.connect(config.getDbConnectionString(),{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('Connected to MongoDB')
    app.listen(app.get('port'),function(){
        console.log('API Server Listening on port ' +app.get('port') + '!')
    })
    
})
