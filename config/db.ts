import { connect } from "mongoose";

const MONGOURI = "mongodb://localhost:27017/graphql";

const mongoServer = async () => {
  try {
    await connect(MONGOURI, { });

    console.log("connected to DB !!!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};
mongoServer();
