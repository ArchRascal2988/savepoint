const router = require('express').Router();
const { User, Game, Review } = require('../models');
const {Op} = require("sequelize");

router.get('/', async (req, res) => {
  try {
    const offsetN= await Game.aggregate("id", "Count", {
      where:{
        rating:{
          [Op.gte]: 90
        }
      }
    })
    .then((count)=> (Math.floor(Math.random()* (count+1))));

    const gamesData= await Game.findAll({
      limit: 8,
      where:{
        rating:{
          [Op.gte]: 90
        }
      },
      offset: offsetN
    });

    const reviewsData= await Review.findAll({
      limit: 8,
      order:[
        ['id', "ASC"]
      ],
      include:[
        {
          model: User,
          attributes: ["username"]
        },

        {
          model: Game,
          attributes: ["title"]
        },
      ]
    });


    const reviewArr= JSON.parse(JSON.stringify(reviewsData));
    const gameArr= JSON.parse(JSON.stringify(gamesData));

    res.render('homepage', { 
      isLogin: false,
      gameArr,
      reviewArr,
      loggedIn: req.session.loggedIn 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
