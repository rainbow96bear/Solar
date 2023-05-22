import { Model, DataTypes, Sequelize } from "sequelize";

export default class pool extends Model {
  public tokenAddress!: string;
  public firstToken!: string;
  public secondToken!: string;
  public name!: string;
  public platformId!: string;
  public platformLogo!: string;
  public network!: string;
  public mainNetLogo!: string;
  public apy!: number;
  public tvl!: number;
  public oracleId!: string;
  public fee!: number;
  public firstTokenBalance!: string;
  public secondTokenBalance!: string;

  public static initModel(sequelize: Sequelize) {
    return pool.init(
      {
        tokenAddress: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        firstToken: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        secondToken: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        platformId: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        platformLogo: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        network: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        mainNetLogo: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        apy: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        tvl: {
          type: DataTypes.DECIMAL(30, 0),
          allowNull: false,
        },
        oracleId: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        fee: {
          type: DataTypes.FLOAT(24),
          allowNull: false,
        },
        firstTokenBalance: {
          type: DataTypes.DECIMAL(30, 0),
          allowNull: false,
        },
        secondTokenBalance: {
          type: DataTypes.DECIMAL(30, 0),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "Pool",
        tableName: "pool",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  public static associate(db: any) {}
}
