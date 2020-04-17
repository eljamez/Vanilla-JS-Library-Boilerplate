import * as counter from './counter'

describe('counter.js', () => {
  it('should exist', () => {
    expect(counter).toBeDefined()
  })

  describe('count', () => {
    it("should not be able to access the variable 'count'", () => {
      expect(counter.count).not.toBeDefined()
    })
  })

  describe('getCount() and setCount()', () => {
    it('should set and get new count value', () => {
      const expected = 500
      counter.setCount(expected)

      expect(counter.getCount()).toEqual(expected)
    })
  })

  describe('increment()', () => {
    it('should increment count', () => {
      const currCount = counter.getCount()
      counter.increment()

      expect(counter.getCount()).toEqual(currCount + 1)
    })
  })

  describe('decrement()', () => {
    it('should return example string', () => {
      const currCount = counter.getCount()
      counter.decrement()

      expect(counter.getCount()).toEqual(currCount - 1)
    })
  })
})
