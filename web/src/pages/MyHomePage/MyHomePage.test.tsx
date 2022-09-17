import { render } from '@redwoodjs/testing/web'

import MyHomePage from './MyHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyHomePage />)
    }).not.toThrow()
  })
})
