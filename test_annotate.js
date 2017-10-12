'use strict'
const vision = require('./index')

// init with auth
vision.init({auth: 'YOUR_API_KEY'})

// construct parameters
const req = new vision.Request({
  image: new vision.Image('GazSud.jpg'),
  features: [
    new vision.Feature('LOGO_DETECTION', 4),
    new vision.Feature('TEXT_DETECTION', 10),
  ]
})

// send single request
vision.annotate(req).then((res) => {
  // handling response
  console.log(JSON.stringify(res.responses));
  console.log("========================================================================");

}, (e) => { 
  console.log('Error: ', e)
})