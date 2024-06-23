const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://vnnghia02:Nghia.2002@cluster0.n6wzqm5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      // "mongodb://localhost:27017/ecommerce1"
    );
    if (conn.connection.readyState === 1)
      console.log("DB connection is successfully!");
    else console.log("DB connecting");
  } catch (error) {
    console.log("DB connection is failed");
    throw new Error(error);
  }
};

module.exports = dbConnect;
