import { render } from '@redwoodjs/testing/web'

import BrunomotaPage from './BrunomotaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BrunomotaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BrunomotaPage />)
    }).not.toThrow()
  })
})
