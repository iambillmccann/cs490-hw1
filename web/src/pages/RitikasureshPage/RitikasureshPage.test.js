import { render } from '@redwoodjs/testing/web'

import RitikasureshPage from './RitikasureshPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RitikasureshPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RitikasureshPage />)
    }).not.toThrow()
  })
})
