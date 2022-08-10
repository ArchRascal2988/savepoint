const { Model, DataTypes}= require("sequelize");
const sequelize= require("../config/connection");

class Game extends Model{
    
}

Game.init(
    {
        title:{
            type: DataTypes.STRING,
            allowNull:false,
            unique: true
        },
        cover_art_url:{
            type: DataTypes.STRING,
            allowNull:true,
            defaultValue: null
        },
        trailer_url:{
            type: DataTypes.STRING,
            allowNull:true,
            defaultValue: null
        },
        release_date:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        description:{
            type: DataTypes.STRING(10000),
            allowNull: false
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull:false,
            unique:false
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        modelName: "game"
    }
);

module.exports= Game;
