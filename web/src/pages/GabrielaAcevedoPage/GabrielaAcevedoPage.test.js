import { render } from '@redwoodjs/testing/web'

import GabrielaAcevedoPage from './GabrielaAcevedoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GabrielaAcevedoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GabrielaAcevedoPage />)
    }).not.toThrow()
  })
})
