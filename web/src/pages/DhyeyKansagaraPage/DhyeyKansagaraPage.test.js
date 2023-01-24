import { render } from '@redwoodjs/testing/web'

import DhyeyKansagaraPage from './DhyeyKansagaraPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DhyeyKansagaraPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DhyeyKansagaraPage />)
    }).not.toThrow()
  })
})
