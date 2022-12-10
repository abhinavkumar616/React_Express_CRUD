const mongoose=require("mongoose")

async function getData(){
    try{
        await mongoose.connect("mongodb://localhost:27017/dec")
        console.log("DataBase is Connected");
    }catch(error){
        console.log("something went wromg in connectivity");
    }
}

getData()