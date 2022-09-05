import { render } from '@redwoodjs/testing/web'

import AlonlernerPage from './AlonlernerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AlonlernerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AlonlernerPage />)
    }).not.toThrow()
  })
})
