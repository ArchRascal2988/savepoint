const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
    helpers:{
      getDate(num){
        
        let raw= new Date(num*1000)
        
        return raw.toLocaleDateString("en-US",{day:"numeric", month:"short", year:"numeric"});
      },
      getStars(num) {
        switch(num){
          case(0<=num && num<=20): 
            return `<i class="fa-solid fa-star"></i>`
          
    
          case (21<=num && num<=40):
            return `<i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>`
          
    
          case (41<=num && num<=60):
            return `<i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>`
          
    
          case (61<=num && num<=80):
            return `<i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>`
        
    
          case (81<=num && num<=100):
            return `<i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>`
          
        }
      }
    }
});

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 60*60*1000,
  },
  resave: false,
  saveUninitialized: true,
  checkExpirationInterval: 15*60*1000,
  expiration: 60*60*1000,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:' +PORT));
});
