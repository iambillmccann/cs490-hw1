import { render } from '@redwoodjs/testing/web'

import DhruvilkansaraPage from './DhruvilkansaraPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DhruvilkansaraPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DhruvilkansaraPage />)
    }).not.toThrow()
  })
})
