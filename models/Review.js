const { Model, DataTypes}= require("sequelize");
const sequelize= require("../config/connection");

class Review extends Model{}

Review.init(
    {
        rating:{
            type: DataTypes.INTEGER,
            allowNull:false,
            validate:{
                min:0,
                max:100
            }
        },
        content:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        likes:{
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        game_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "game",
                key: "id" 
            }
        },
        author_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "user",
                key: "id" 
            }
        },
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        modelName: "review"
    }
);

module.exports= Review;