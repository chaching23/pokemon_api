const sharks = require('../controllers/controllers');

module.exports = (app) => {
    app.get("/", sharks.index)
};