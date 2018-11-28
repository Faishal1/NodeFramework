module.exports = (sequelize, type) => {
  return sequelize.define('questionOptions', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      choices: type.JSON,
      isRightChoice: type.INTEGER,
      questionId: type.INTEGER
  }, { freezeTableName: true })
}