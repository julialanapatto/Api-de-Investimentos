const app = require('./app');
const cors = require('cors');

const { PORT } = process.env;

app.use(cors());
app.get('/', (_req, res) => {
  res.send();
});

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

module.exports = server;