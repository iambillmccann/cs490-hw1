import { render } from '@redwoodjs/testing/web'

import HaoMassimochenPage from './HaoMassimochenPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HaoMassimochenPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HaoMassimochenPage />)
    }).not.toThrow()
  })
})
