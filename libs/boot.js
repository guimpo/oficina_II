var https = require("https")
var fs = require("fs")

module.exports = app => {
  if (process.env.NODE_ENV !== "test") {
    const credentials = {
      key: fs.readFileSync("92873456_ntask.key", "utf8"),
      cert: fs.readFileSync("92873456_ntask.cert", "utf8")
    }
    app.db.sequelize.sync().done(() => {
      https.createServer(credentials, app)
        .listen(app.get("port"), () => {
          console.log(`Atividades complementares - Port ${app.get("port")}`);
        });
    });
  }
};