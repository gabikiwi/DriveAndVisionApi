'use strict'
const __ = require('underscore')

module.exports = {
  
  Request: require('./models/Request'),

  Feature: require('./models/Feature'),

  Image: require('./models/Image'),

  _client: null,

  init(options) {
    this._options = __.defaults(options, {version: 'v1'})
    const Endpoint = require('./clients/' + options.version)
    var ep = new Endpoint(options)
    ep.google = this
    this._client = ep
  },

  annotate(requests) {
    return new Promise((resolve, reject) => {
      if (!requests) { return reject() }
      if (!__.isArray(requests)) { requests = [requests] }    
      this._client.annotate(requests).then(resolve, reject)
    })
  }
}
