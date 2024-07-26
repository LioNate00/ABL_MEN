// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

const User = require('./user')(sequelize, DataTypes);
const Product = require('./product')(sequelize, DataTypes);
const Payment = require('./payment')(sequelize, DataTypes);
const Session = require('./session')(sequelize, DataTypes);


// Definisikan hubungan
User.hasMany(Payment);
Payment.belongsTo(User);
Product.hasMany(Payment);
Payment.belongsTo(Product);

// Add this relationship if necessary
User.hasMany(Session);
Session.belongsTo(User);

module.exports = { sequelize, User, Product, Payment, Session };  // Add Session to exports