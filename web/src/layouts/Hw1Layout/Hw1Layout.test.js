import { render } from '@redwoodjs/testing/web'

import Hw1Layout from './Hw1Layout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Hw1Layout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Hw1Layout />)
    }).not.toThrow()
  })
})
