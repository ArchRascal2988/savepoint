const router = require('express').Router();
const reviewRoutes = require('./reviewRoutes');
const playlistRoutes = require('./playlistRoutes');
const gameRoutes = require('./gameRoutes');
const userRoutes= require('./userRoutes');

router.use('/reviews', reviewRoutes);
router.use('/playlist', playlistRoutes);
router.use('/games', gameRoutes);
router.use('/user', userRoutes);

module.exports = router;
