// const { Model, DataTypes}= require("sequelize");
// const sequelize= require("../config/connection");

// class Collection extends Model{

// }

// Collection.init({

//     name:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     author:{
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references:{
//             model: 'user',
//             key: 'id'
//         }

//     },
//     games:{
//         type: DataTypes.ARRAY,
//         allowNull: false,
//         references:{
//             model: 'game',
//             key: 'id'
//         }
//     }
// },
// {
//     sequelize,
//     timestamps:false,
//     freezeTableName: true,
//     modelName: "game"
// }
// )