var express = require('express');
var router = express.Router();
var axios = require('axios');

const client_id = "MlSQCh9BD3pvWCC-KEXENw"
const api_key = "9OWN7mLDbiSvGqpS8uwgd-XBK3DLJJhjn2uMUP4FIt1vmAk6vy8xKoA7VqEbjy0kKd8Qqj52z3eo3mgiqN9ykUfkW2sveDyLHw6qPNNts0Zhu3AGUSR_C9L7AplbW3Yx"

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
