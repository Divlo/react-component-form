
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-component-form.cjs.production.min.js')
} else {
  module.exports = require('./react-component-form.cjs.development.js')
}
