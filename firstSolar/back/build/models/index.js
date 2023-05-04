import { Sequelize } from "sequelize";
import Config from "../config/config.js";
import Price from "./price.js";
import Pool from "./pool.js";
const env = process.env.NODE_ENV || "development";
const config = Config[env];
const db = { Price, Pool };
let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.Price = Price.initModel(sequelize);
db.Pool = Pool.initModel(sequelize);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;
