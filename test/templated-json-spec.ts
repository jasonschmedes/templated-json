import { templatedJSON } from '../src/index'

describe('Templated JSON', function() {
  it('should print the environment', function() {
    const TemplatedJSON = templatedJSON.TemplatedJSON
    const t = new TemplatedJSON()
    expect(t.hello()).toBe('Hello development!')
  })
})
