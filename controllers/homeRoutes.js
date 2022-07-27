const router = require('express').Router();
const { User, Game } = require('../models');
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

    const gamesArr=[];
    const blacklist=[];

    for(i=0; i<15;i++){
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

    res.render('homepage', { 
      isLogin: false,
      gamesArr,
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
