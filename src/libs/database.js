import  mongoose from 'mongoose';

class Database {
    constructor(mongoUrl) {
        this.mongoUrl = mongoUrl;
    }

    async connect() {
        try {
            await mongoose.connect(this.mongoUrl, { useNewUrlParser: true,useFindAndModify: false,useCreateIndex :true,useUnifiedTopology: true
            });
            console.log("connected to mongodb successfully");
       }catch(err) {
          console.log(err.message);
          process.exit(1)
   
       }
    }
}

export default Database;