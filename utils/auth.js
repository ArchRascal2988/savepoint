const withAuth = (req, res, next) => {
    if(!req.session.loggedIn){
        res.redirect('/landing/login')
    } else{
        next();
    }
};

module.exports = withAuth;
