import { DataTypes } from "sequelize";
import sequelize from "../conn/db";
import Book from "./Book";

const Publisher = sequelize.define('Publisher', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'publishers',
    timestamps: false
});

// Relacionamento que uma editora tem muitos Books
Publisher.hasMany(Book, {
    foreignKey: 'publisherId',
    as: 'Books'
});
// Conectar o banco Book a editora
Book.belongsTo(Publisher, {
    foreignKey: 'publisherId',
    as: 'publisher'
});

export default Publisher;
