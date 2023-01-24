import { render } from '@redwoodjs/testing/web'

import NeelpatilPage from './NeelpatilPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NeelpatilPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NeelpatilPage />)
    }).not.toThrow()
  })
})
