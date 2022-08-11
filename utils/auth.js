const withAuth = (req, res, next) => {
    if(!req.session.loggedIn){
        res.status(303).redirect('/landing/login')
    } else{
        next();
    }
};

module.exports = withAuth;
