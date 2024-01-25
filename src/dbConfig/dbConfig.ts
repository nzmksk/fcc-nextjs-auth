import mongoose from "mongoose";

const dbConfig = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected succesfully.");
    });

    connection.on("error", (error) => {
      console.log(
        `MongoDB connection error. Please make sure MongoDB is running. ${error}`
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
};

export default dbConfig;
