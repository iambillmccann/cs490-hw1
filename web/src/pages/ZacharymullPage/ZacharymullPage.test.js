import { render } from '@redwoodjs/testing/web'

import ZacharymullPage from './ZacharymullPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ZacharymullPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ZacharymullPage />)
    }).not.toThrow()
  })
})
