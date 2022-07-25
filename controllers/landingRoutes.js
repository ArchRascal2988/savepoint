const router = require('express').Router();


router.get('/login', async(req,res)=>{
    try{
        if(req.session.loggedIn==true){
            res.redirect('/home');
        } else{
            res.render('login' ,{
                isLogin: true
            })

        }
    } catch(err){
        res.status(500).json(err);
    }
});

router.get('/signup', async(req,res)=>{
    try{
        if(req.session.loggedIn==true){
            res.redirect('/home');
        } else{
            res.render('signup', {
                isLogin: true
            })
        }
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;