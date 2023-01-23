import { render } from '@redwoodjs/testing/web'

import KaranpatelPage from './KaranpatelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KaranpatelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KaranpatelPage />)
    }).not.toThrow()
  })
})
