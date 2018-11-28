module.exports = (sequelize, type) => {
  return sequelize.define('userAnswer', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      questionId: type.INTEGER,
      userId: type.INTEGER,
      choiceId: type.INTEGER
  }, { freezeTableName: true })
}