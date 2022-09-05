import { render } from '@redwoodjs/testing/web'

import SakthivelanmanikanthanPage from './SakthivelanmanikanthanPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SakthivelanmanikanthanPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SakthivelanmanikanthanPage />)
    }).not.toThrow()
  })
})
