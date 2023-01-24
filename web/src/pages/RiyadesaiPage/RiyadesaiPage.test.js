import { render } from '@redwoodjs/testing/web'

import RiyadesaiPage from './RiyadesaiPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RiyadesaiPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RiyadesaiPage />)
    }).not.toThrow()
  })
})
