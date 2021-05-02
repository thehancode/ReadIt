const app = require("./app");
const config = require("./config");
require("./database");

app.listen(config.PORT, () => {
  console.log(`El servidor escucha en el puerto ${config.PORT}`);
});
