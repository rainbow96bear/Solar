import { Sequelize } from "sequelize";
import Config from "../config/config.json";

import Price from "./price";
import Pool from "./pool";

const env = process.env.NODE_ENV || "development";
const config = Config[env];
const db: any = { Price, Pool };

let sequelize: any = new Sequelize(
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
