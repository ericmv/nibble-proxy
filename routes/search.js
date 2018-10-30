var express = require('express');
var router = express.Router();
var axios = require('axios');

const client_id = "YOUR_ID_HERE"
const api_key = "YOUR_API_KEY_HERE"

const url = "https://api.yelp.com/v3/businesses/search"

/* GET users listing. */
router.get('/', function(req, res, next) {
  const location = req.query.location;
  const price = req.query.price;
  const term = req.query.term;

  const headers = {
    Authorization: 'Bearer ' + api_key
  }
  console.log(headers)

  const params = {
    term: term,
    location: location,
    limit: 25,
  }
  console.log(params)
  axios.get(url,
    {params: params,headers: headers}
  )
  .then((results) => {
    res.send(results.data)
  })
  .catch((err) => {
    console.log(err)
    console.log("could not retrieve businesses")
  })


});

module.exports = router;
