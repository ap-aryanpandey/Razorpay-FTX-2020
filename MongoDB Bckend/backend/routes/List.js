const router = require('express').Router();
let List = require('../models/list.model');

router.route('/').get((req, res) => {
  List.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const orderid = req.body.orderid;
  const customerid = req.body.customerid;
  const address = req.body.address;
  const phone = Number(req.body.phone);
  
  console.log(req.body)

  const newList = new List({
    orderid,
    customerid,
    address,
    phone,
  });

  newList.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;