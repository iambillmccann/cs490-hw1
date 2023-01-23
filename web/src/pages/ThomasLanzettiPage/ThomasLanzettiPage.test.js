import { render } from '@redwoodjs/testing/web'

import ThomasLanzettiPage from './ThomasLanzettiPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ThomasLanzettiPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThomasLanzettiPage />)
    }).not.toThrow()
  })
})
