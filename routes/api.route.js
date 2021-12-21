const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/products', async (req, res, next) => {
  try {
    const products = await prisma.products.findMany({})
    res.json(products)
  } catch (err) {
    next(err)
  }

});

router.get('/product/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/catergory', async (req, res, next) => {
  try {
    const catergory = await prisma.catergory.create({
      data: req.body
    })
    res.json(catergory)
  }
  catch (err) { next(err) }
})

router.post('/products', async (req, res, next) => {

  console.log("la route marche")
  console.log(req.body)
  try {
    const products = await prisma.products.create({
      data: req.body
    })
    res.json(products)
  } catch (err) { next(err) }

});

router.delete('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.patch('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
