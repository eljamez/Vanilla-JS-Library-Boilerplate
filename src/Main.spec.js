import main from './Main'

describe('Main.js', () => {
  it('should exist', () => {
    expect(main).toBeDefined()
  })

  describe('Counter', () => {
    it('should exist', () => {
      expect(main.counter).toBeDefined()
    })
  })
})
