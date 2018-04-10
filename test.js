'use strict'

const assert = require('assert')
const throwError = require('.')

describe('throwError()', function () {
  it('should throw an Error', function () {
    assert.throws(() => { throwError(new Error()) })
  })

  it('should throw a subclassed Error', function () {
    assert.throws(() => { throwError(new RangeError()) }, RangeError)
  })

  it('should return a non-error', function () {
    assert.strictEqual(throwError(123), 123)
  })
})
