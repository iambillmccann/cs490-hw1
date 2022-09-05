import { render } from '@redwoodjs/testing/web'

import MichaelbrzostekPage from './MichaelbrzostekPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MichaelbrzostekPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MichaelbrzostekPage />)
    }).not.toThrow()
  })
})
