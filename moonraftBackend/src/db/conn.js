const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/moonraftEmployee",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connect succesfull`);
}).catch((e)=>{
    console.log(`no connection `);
})