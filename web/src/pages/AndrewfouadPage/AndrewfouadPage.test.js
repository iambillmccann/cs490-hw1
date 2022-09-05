import { render } from '@redwoodjs/testing/web'

import AndrewfouadPage from './AndrewfouadPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AndrewfouadPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AndrewfouadPage />)
    }).not.toThrow()
  })
})
