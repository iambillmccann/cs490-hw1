import { render } from '@redwoodjs/testing/web'

import TimothygurguisPage from './TimothygurguisPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TimothygurguisPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TimothygurguisPage />)
    }).not.toThrow()
  })
})
