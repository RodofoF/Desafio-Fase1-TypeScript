import { DataTypes } from "sequelize";
import sequelize from "../conn/db";


const Livro = sequelize.define('Livro', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    editoraId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'editoras',
            key: 'id'
        }
    }
},{
    tableName: 'livros',
    timestamps: false
});




export default Livro;