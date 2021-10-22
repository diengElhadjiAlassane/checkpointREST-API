const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://admin:azerty1234@cluster0.ss3ja.mongodb.net/checkpoint',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(()=>console.log('connected to mongoDB'))
.catch((err)=>console.log(err))