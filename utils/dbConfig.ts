import mongoose from "mongoose";

const URL: string = "mongodb://127.0.0.1:27017";

export const dbConfig = async () => {
  await mongoose.connect(URL).then(() => {
    console.log("database is connected...✔✔");
  });
};
