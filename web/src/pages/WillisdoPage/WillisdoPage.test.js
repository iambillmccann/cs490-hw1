import { render } from '@redwoodjs/testing/web'

import WillisdoPage from './WillisdoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WillisdoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WillisdoPage />)
    }).not.toThrow()
  })
})
