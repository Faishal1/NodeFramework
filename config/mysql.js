// import Sequelize from "sequelize";
// import UserModel from "../app/api/user/model";
// import QuestionOptionsModel from "../app/api/questionOptions/model";
// import QuestionsModel from "../app/api/questions/model";
// import UserAnswerModel from "../app/api/userAnswer/model";
// import TestModel from "../app/api/test/model";
// import config from "../config/development.json";
// const db = {};

// const sequelize = new Sequelize(
//   config.mysql.DB_DATABASE,
//   config.mysql.DB_USERNAME,
//   config.mysql.DB_PASSWORD,
//   {
//     dialect: config.mysql.dialect,
//     host: config.mysql.DB_HOSTNAME,
//     port: config.mysql.DB_PORT,
//   },
// );

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.User = UserModel(sequelize, Sequelize);
// db.QuestionOptions = QuestionOptionsModel(sequelize, Sequelize);
// db.Questions = QuestionsModel(sequelize, Sequelize);
// db.UserAnswer = UserAnswerModel(sequelize, Sequelize);
// db.Test = TestModel(sequelize, Sequelize);

// // db.User.sync({force: true}).then(() => {
// //   // Table created
// //   return db.User.create({
// //     userName:"faishal",
// //     emailId:"faishal2",
// //     phoneNo:632632,
// //     password:73623232
// //   });
// // });

// module.exports = db;
