import { render } from '@redwoodjs/testing/web'

import NicolasoberholtzerPage from './NicolasoberholtzerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NicolasoberholtzerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NicolasoberholtzerPage />)
    }).not.toThrow()
  })
})
