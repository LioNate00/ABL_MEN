// models/session.js
module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('Session', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      loginTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      logoutTime: {
        type: DataTypes.DATE,
        allowNull: true
      }
    });
    return Session;
  };
  