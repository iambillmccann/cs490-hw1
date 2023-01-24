import { render } from '@redwoodjs/testing/web'

import CrismolinaPage from './CrismolinaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CrismolinaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrismolinaPage />)
    }).not.toThrow()
  })
})
