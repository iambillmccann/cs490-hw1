import { render } from '@redwoodjs/testing/web'

import SohamshahPage from './SohamshahPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SohamshahPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SohamshahPage />)
    }).not.toThrow()
  })
})
