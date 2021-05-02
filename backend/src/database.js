const mongoose = require("mongoose");
const config = require("./config");

(async () => {
  try {
    const mongooseOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };

    const db = await mongoose.connect(
      `mongodb+srv://admin:${config.MONGO_PASSWORD}@mycluster.3n2iw.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`,
      mongooseOptions
    );
    console.log(`Database ${db.connection.name} connected`);
  } catch (error) {
    console.error(error);
  }
})();
