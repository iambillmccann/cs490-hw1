import { render } from '@redwoodjs/testing/web'

import Mvd29Page from './Mvd29Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Mvd29Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Mvd29Page />)
    }).not.toThrow()
  })
})
