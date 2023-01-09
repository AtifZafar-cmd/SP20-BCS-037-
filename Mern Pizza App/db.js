const mongoose=require('mongoose')


const uri = 'mongodb://localhost:27017/MernPizza';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
    family: 4 // Use IPv4, skip trying IPv6
}

const connectWithDB = () => {
    mongoose.connect(uri, options, (err, db) => {
      if (err) console.error(err);
      else console.log("database connection succedded");
    })
}

connectWithDB()