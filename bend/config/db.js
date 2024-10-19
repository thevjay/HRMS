
const mongoose = require("mongoose");
require("dotenv").config();


// Connection function
exports.connectDB =()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(console.log(`DB Connection Success`))
	.catch((err) => {
		console.log(`DB Connection Failed`);
		console.log(err);
		process.exit(1);
	});
} 

