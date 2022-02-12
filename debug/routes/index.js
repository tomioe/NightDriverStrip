var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var staticEffectList = {
  "currentEffect": 0,
  "millisecondsRemaining": 10000,
  "effectInterval": 10000,
  "enabledCount": 3,
  "Effects": [
    {"name": "Test 1", "enabled": "true"},
    {"name": "Test 2"},
    {"name": "Test 3"}
  ]
}

router.get('/getEffectList', function(req, res, next) {
  if(staticEffectList.millisecondsRemaining == 0)
    staticEffectList.millisecondsRemaining = 10000;
  staticEffectList.millisecondsRemaining -= 500
  res.set({
    "Server": "DEBUG-NightDriverStrip",
    "Access-Control-Allow-Origin": "*"
  })
  res.json(staticEffectList)
});


router.post('/adjustBrightness', function(req, res, next) {
  console.log("Adjust brightness to [0-255]: " + req.body.adjustBrightness)
  res.set({
    "Server": "DEBUG-NightDriverStrip",
    "Access-Control-Allow-Origin": "*"
  })
  res.json(staticEffectList)
});

module.exports = router;
