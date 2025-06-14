import { DataTypes } from "sequelize";
import sequelize from "../conn/db";

const Editora = sequelize.define('Editora', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'editoras',
    timestamps: false
});

export default Editora;
