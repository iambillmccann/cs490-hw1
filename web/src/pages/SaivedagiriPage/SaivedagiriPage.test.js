import { render } from '@redwoodjs/testing/web'

import SaivedagiriPage from './SaivedagiriPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SaivedagiriPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SaivedagiriPage />)
    }).not.toThrow()
  })
})
