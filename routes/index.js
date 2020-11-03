const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;



router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movies => {
            console.log('Retrieved books from DB:', movies);
            res.render('movies', {movies : movies});
        })
        .catch(error => console.log('Error while getting the books from the DB: ', error));
});

router.get('/movies/:movieId', (req, res, next) => {
    Movie.findById(req.params.movieId)
        .then(movies => { 
            console.log(movies);
                res.render('movieDetail', { movieFromDB: movies});
              }, function(err) {
                console.log('Something went wrong!', err);
              })
              .catch(err => console.log('The error while searching artists occurred: ', err));
            });


