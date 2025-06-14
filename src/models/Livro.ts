import { DataTypes } from "sequelize";
import sequelize from "../conn/db";
import Editora from "./editora";

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

// Conectar o banco livro a editora
Livro.belongsTo(Editora, {
    foreignKey: 'editoraId',
    as: 'editora'
});

// Relacionamento que uma editora tem muitos livros
Editora.hasMany(Livro, {
    foreignKey: 'editoraId',
    as: 'livros'
});

export default Livro;