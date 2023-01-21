import { render } from '@redwoodjs/testing/web'

import SafiullahBaigPage from './SafiullahBaigPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SafiullahBaigPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SafiullahBaigPage />)
    }).not.toThrow()
  })
})
