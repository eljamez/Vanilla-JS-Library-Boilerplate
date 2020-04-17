import main from './index'

describe('index.js', () => {
  it('should exist', () => {
    expect(main).toBeDefined()
  })

  describe('counter', () => {
    it('should exist', () => {
      expect(main.counter).toBeDefined()
    })
  })
})
