import { render } from '@redwoodjs/testing/web'

import EdendubrovskyPage from './EdendubrovskyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EdendubrovskyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EdendubrovskyPage />)
    }).not.toThrow()
  })
})
