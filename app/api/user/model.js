export default (sequelize, type) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: type.STRING,
      emailId: type.STRING,
      phoneNo: type.INTEGER,
      password: type.INTEGER,
    },
    { freezeTableName: true },
  );
};
