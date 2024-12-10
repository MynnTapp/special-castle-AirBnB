const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_FILE,
  logging: console.log
});

(async () => {
  try {
    const tableExists = await sequelize.query(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='Spots';",
      { type: Sequelize.QueryTypes.SELECT }
    );
    if (tableExists.length > 0) {
      console.log('Table "Spots" exists.');
    } else {
      console.log('Table "Spots" does not exist.');
    }
  } catch (error) {
    console.error('Error checking table existence:', error);
  } finally {
    await sequelize.close();
  }
})();
