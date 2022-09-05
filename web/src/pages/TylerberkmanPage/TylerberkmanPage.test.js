import { render } from '@redwoodjs/testing/web'

import TylerberkmanPage from './TylerberkmanPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TylerberkmanPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TylerberkmanPage />)
    }).not.toThrow()
  })
})
