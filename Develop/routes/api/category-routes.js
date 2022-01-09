const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    let catInfo = Category.findAll({
      include:{
        model:Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    });
    res.status(200).json(catInfo)
  }
  catch (err){
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    let catInfo = Category.findByPk(req.params.id, {
      include:{
        model:Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    });
    res.status(200).json(catInfo)
  }
  catch (err){
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    let newCat = Category.create({
      catagory_name:req.body.catagory_name
    })
    res.status(200).json(newCat)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    
  } catch (err) {
    res.status(500).json(err)
  }
});                                                                              

module.exports = router;
