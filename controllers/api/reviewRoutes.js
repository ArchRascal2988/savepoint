
const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/:id/add', withAuth, async (req,res)=>{
  try{ 
    console.log(req.body, req.params.id, req.session.userId)
    const newReview= await Review.create({
      rating: req.body.rating,
      content: req.body.content,
      game_id: req.params.id,
      author_id: req.session.userId
    })

    res.status(200).json(newReview);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id/change', withAuth, async (req,res)=>{
  try{
    const updatedReview = await Review.update({
    },
    {
      where:{
        game_id: req.params.id,
        author_id: req.session.userId
      }
    })
    if(!updatedReview){
      res.status(404).json({message:"Something went wrong :( Review not updated."});
    }
    res.status(200).json(updatedReview);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id/delete', withAuth, async(req,res)=>{
  try{
    const deleteReview= await Review.destroy({
      where:{
        game_id: req.params.id,
        author_id: req.session.userId
      }
    })
    res.status(200).json(deleteReview);
  }
  catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
