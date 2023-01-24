import { render } from '@redwoodjs/testing/web'

import AkashdeepsinghPage from './AkashdeepsinghPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AkashdeepsinghPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AkashdeepsinghPage />)
    }).not.toThrow()
  })
})
