import { render } from '@redwoodjs/testing/web'

import ShriyaShahPage from './ShriyaShahPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ShriyaShahPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShriyaShahPage />)
    }).not.toThrow()
  })
})
