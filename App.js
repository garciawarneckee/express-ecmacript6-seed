import express from 'express'
import bodyParser from 'body-parser'

/**
 * This class wrap all the necessary configuration in order to make the app work
 * Instance controllers and bodyParser.
 */
class App extends express {
  constructor() {
    super()
    this.use(bodyParser.json({extended: true}))
  }
}

  module.exports = App