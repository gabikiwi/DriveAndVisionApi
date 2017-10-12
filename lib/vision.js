'use strict'
const vision = require('./vision/index')

// init with auth
vision.init({auth: 'AIzaSyDsMsddPjDQzEd3o-xm4vy_SRXEZqO6tXE'})

// construct parameters
const req = new vision.Request({
  image: new vision.Image('./lib/vision/img/GazSud.jpg'),
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