import { render } from '@redwoodjs/testing/web'

import MehulpatelPage from './MehulpatelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MehulpatelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MehulpatelPage />)
    }).not.toThrow()
  })
})
