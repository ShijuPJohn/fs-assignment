const express = require('express');
const sequelize = require("./database/database");
const app = express();
const cardRoutes = require('./routes/cardRoutes');

const PORT = 5000;
app.use(express.json());
sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });
app.use('/api/v1/cards', cardRoutes)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});