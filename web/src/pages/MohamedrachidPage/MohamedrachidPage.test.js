import { render } from '@redwoodjs/testing/web'

import MohamedrachidPage from './MohamedrachidPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MohamedrachidPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MohamedrachidPage />)
    }).not.toThrow()
  })
})
