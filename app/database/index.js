import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import config from "../../config";
// import Users from "./Users/user";
const ROOT_DIR = path.dirname(require.main.filename);
const APP_DIR = `${ROOT_DIR}/app/api`;

// console.log("Inside database/index.js", config);
const db = {};

let sequelize = null;
const { Op } = Sequelize;
const operatorsAliases = {
  $gt: Op.gt,
  $gte: Op.gte,
  $ne: Op.ne,
  $in: Op.in,
  $or: Op.or,
  $and: Op.and,
  $like: Op.like,
};
// console.log("process", process.env[config.env]);
// if (config.env) {
//   sequelize = new Sequelize(process.env[config.env], config);
// } else {
const databaseConf = config.mysql;

sequelize = new Sequelize(
  databaseConf.DB_DATABASE,
  databaseConf.DB_USERNAME,
  databaseConf.DB_PASSWORD,
  {
    host: databaseConf.DB_HOSTNAME,
    dialect: databaseConf.dialect,
    operatorsAliases,
  },
);
// }

const files = [];
const sortDir = maniDir => {
  const folders = [];
  const CheckFile = filePath => fs.statSync(filePath).isFile();
  const sortPath = dir => {
    // console.log("checkFile", dir);
    fs
      .readdirSync(dir)
      // .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
      .forEach(res => {
        // console.log("res", res);
        const filePath = path.join(dir, res);
        if (CheckFile(filePath)) {
          // console.log("filePath", filePath.indexOf("model.js"));
          if (filePath.indexOf("model.js") !== -1) {
            files.push(filePath);
          }
        } else {
          folders.push(filePath);
        }
      });
  };
  folders.push(maniDir);
  let i = 0;
  do {
    sortPath(folders[i]);
    i += 1;
  } while (i < folders.length);
};
sortDir(APP_DIR);

files.forEach(file => {
  const model = sequelize.import(file);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db.sequelize.sync({
//   logging: false,
// });

export default db;
