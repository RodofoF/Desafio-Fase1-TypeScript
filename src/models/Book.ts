import { DataTypes } from "sequelize";
import sequelize from "../conn/db";


const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ISBN: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    publisherId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'publishers',
            key: 'id'
        }
    }
},{
    tableName: 'books',
    timestamps: false
});




export default Book;