import { render } from '@redwoodjs/testing/web'

import MurtajizkazmiPage from './MurtajizkazmiPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MurtajizkazmiPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MurtajizkazmiPage />)
    }).not.toThrow()
  })
})
