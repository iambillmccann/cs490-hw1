import { render } from '@redwoodjs/testing/web'

import RajpatelPage from './RajpatelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RajpatelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RajpatelPage />)
    }).not.toThrow()
  })
})
