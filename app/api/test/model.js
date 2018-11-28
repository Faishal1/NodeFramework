module.exports = (sequelize, type) => {
  return sequelize.define('test', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      testName: type.STRING,
      testType: type.STRING
  })
}