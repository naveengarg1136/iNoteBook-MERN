const mongoose= require('mongoose');
const mongoURI="mongodb://localhost:27017/iNoteBook?directConnection=true"

const connectToMongo=async()=>{
    await mongoose.connect(mongoURI);
    console.log("haan bhai ho gya connect");

}

module.exports= connectToMongo;