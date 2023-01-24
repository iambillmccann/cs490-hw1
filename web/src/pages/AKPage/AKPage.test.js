import { render } from '@redwoodjs/testing/web'

import AkPage from './AkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AkPage />)
    }).not.toThrow()
  })
})
