import { render } from '@redwoodjs/testing/web'

import EvelyngarciaMendozaPage from './EvelyngarciaMendozaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EvelyngarciaMendozaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EvelyngarciaMendozaPage />)
    }).not.toThrow()
  })
})
