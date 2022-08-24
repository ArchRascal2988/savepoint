const router = require('express').Router();
const { User, Game, Review } = require('../models');
const {Op} = require("sequelize");

router.get('/', async (req, res) => {
  try {
    const popularGamesData= await Game.findAll({
      where:{
        rating:{
          [Op.gte]: 90
        }
      }
    });

    const reviewsArr= await Review.findAll({
      limit: 3,
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
    })

    const gamesArr=[];
    const blacklist=[];

    for(i=0; i<7;i++){
      let random= Math.floor(Math.random()*popularGamesData.length);
      if(blacklist.includes(random)){
        while(blacklist.includes(random)){
          random= Math.floor(Math.random()*popularGamesData.length);
        }
      }

      let showcaseItem= popularGamesData[random]
      showcaseGame= showcaseItem.get({plain:true});

      gamesArr.push(showcaseGame);
      blacklist.push(random);
    }

    reviewsArr.map((review)=>{
      return review.get({plain: true})
    }) 

    res.render('homepage', { 
      isLogin: false,
      gamesArr,
      reviewsArr,
      loggedIn: req.session.loggedIn 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
