import { render } from '@redwoodjs/testing/web'

import ElimojicaPage from './ElimojicaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ElimojicaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ElimojicaPage />)
    }).not.toThrow()
  })
})
