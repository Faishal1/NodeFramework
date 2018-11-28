module.exports = (sequelize, type) => {
  return sequelize.define('questions', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      question: type.STRING,
      is_active: type.INTEGER,
      testId: type.INTEGER
  }, { freezeTableName: true })
}