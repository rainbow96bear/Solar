import { Model, DataTypes } from "sequelize";
export default class Price extends Model {
    static initModel(sequelize) {
        return Price.init({
            tokenSymbol: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            tokenId: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            tokenSlug: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            ConvertToUSDT: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            ConvertToETH: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            ConvertToBNB: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            tokenPrice: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: true,
            paranoid: false,
            modelName: "Price",
            tableName: "price",
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci",
        });
    }
    static associate(db) { }
}
