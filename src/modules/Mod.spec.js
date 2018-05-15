import mod from './Mod'

describe('Mod.js', () => {
  it('should exist', () => {
    expect(mod).toBeDefined()
  })

  describe('modMethod', () => {
    it('should return example string', () => {
      expect(mod.modMethod()).toEqual('got modMethod')
    })
  })
})
