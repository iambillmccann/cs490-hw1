import { render } from '@redwoodjs/testing/web'

import DhyeypatelPage from './DhyeypatelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DhyeypatelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DhyeypatelPage />)
    }).not.toThrow()
  })
})
