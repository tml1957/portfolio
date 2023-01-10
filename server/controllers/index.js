const welcomePage = (req, res) => {
  res.render('welcome', { csrfToken: req.csrfToken() });
};

const webPage = (req, res) => {
    res.render('web', { csrfToken: req.csrfToken() });
  };

const gamesPage = (req, res) => {
    res.render('games', { csrfToken: req.csrfToken() });
  };

const aboutPage = (req, res) => {
    res.render('about', { csrfToken: req.csrfToken() });
  };

const notFoundPage = (req, res) => res.render('notFound');

module.exports = {
  welcomePage,
  aboutPage,
  gamesPage,
  webPage,
  notFoundPage,
};
