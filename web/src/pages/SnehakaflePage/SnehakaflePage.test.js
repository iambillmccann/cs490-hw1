import { render } from '@redwoodjs/testing/web'

import SnehakaflePage from './SnehakaflePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SnehakaflePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SnehakaflePage />)
    }).not.toThrow()
  })
})
