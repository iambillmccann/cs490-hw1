import { render } from '@redwoodjs/testing/web'

import ThomasbetheaPage from './ThomasbetheaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ThomasbetheaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThomasbetheaPage />)
    }).not.toThrow()
  })
})
