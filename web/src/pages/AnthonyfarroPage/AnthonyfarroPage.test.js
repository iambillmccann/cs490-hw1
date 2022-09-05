import { render } from '@redwoodjs/testing/web'

import AnthonyfarroPage from './AnthonyfarroPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AnthonyfarroPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnthonyfarroPage />)
    }).not.toThrow()
  })
})
