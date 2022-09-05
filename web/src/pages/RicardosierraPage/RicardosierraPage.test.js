import { render } from '@redwoodjs/testing/web'

import RicardosierraPage from './RicardosierraPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RicardosierraPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RicardosierraPage />)
    }).not.toThrow()
  })
})
