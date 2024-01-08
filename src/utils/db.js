const mongoose = require('mongoose');

const connect = async () =>{

    try {
        await mongoose.connect(process.env.MONGO_URL);
      } catch (error) {
        throw new Error("connection Failed!!")
      }
}

export default connect;