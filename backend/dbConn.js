const mongoose = require('mongoose');

const connectDB= async ()=>{
try{
    await mongoose.connect("mongodb+srv://bat:codeforimpact@codeforimpact.etogpf9.mongodb.net/?retryWrites=true&w=majority",{
        useUnifiedTopology :true,
        // useNewParser: true
    });
}
catch(err){
    console.error(err);
}
}

module.exports = connectDB;