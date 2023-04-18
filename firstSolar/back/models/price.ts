import { Model, DataTypes, Sequelize } from "sequelize";

export default class Price extends Model {
  public tokenId!: string;
  public tokenSymbol!: string;
  public tokenName!: number;
  public tokenPrice!: string;

  public static initModel(sequelize: Sequelize) {
    return Price.init(
      {
        tokenId: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        tokenSymbol: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        tokenName: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        tokenPrice: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "Price",
        tableName: "price",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  public static associate(db: any) {}
}
