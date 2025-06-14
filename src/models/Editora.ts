import { DataTypes } from "sequelize";
import sequelize from "../conn/db";
import Livro from "./Livro";

const Editora = sequelize.define('Editora', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'editoras',
    timestamps: false
});

// Relacionamento que uma editora tem muitos livros
Editora.hasMany(Livro, {
    foreignKey: 'editoraId',
    as: 'livros'
});
// Conectar o banco livro a editora
Livro.belongsTo(Editora, {
    foreignKey: 'editoraId',
    as: 'editora'
});

export default Editora;
