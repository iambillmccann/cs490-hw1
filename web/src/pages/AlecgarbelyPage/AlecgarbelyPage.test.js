import { render } from '@redwoodjs/testing/web'

import AlecgarbelyPage from './AlecgarbelyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AlecgarbelyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AlecgarbelyPage />)
    }).not.toThrow()
  })
})
