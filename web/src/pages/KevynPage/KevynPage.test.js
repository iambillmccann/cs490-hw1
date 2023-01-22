import { render } from '@redwoodjs/testing/web'

import KevynPage from './KevynPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KevynPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KevynPage />)
    }).not.toThrow()
  })
})
