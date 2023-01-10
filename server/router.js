const controllers = require('./controllers');

const router = (app) => {
  app.get('/web', controllers.webPage);

  app.get('/games', controllers.gamesPage);

  app.get('/about', controllers.aboutPage);

  app.get('/welcomePage', controllers.welcomePage);
  app.get('/', controllers.welcomePage);

  app.get('/*', controllers.notFoundPage);
};

module.exports = router;
