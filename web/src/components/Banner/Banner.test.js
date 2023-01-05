import { render } from '@redwoodjs/testing/web'

import Banner from './Banner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Banner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Banner />)
    }).not.toThrow()
  })
})
