import { render } from '@redwoodjs/testing/web'

import LeonardoulloaPage from './LeonardoulloaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LeonardoulloaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LeonardoulloaPage />)
    }).not.toThrow()
  })
})
