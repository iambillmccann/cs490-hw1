import { render } from '@redwoodjs/testing/web'

import DeannaMostafaPage from './DeannaMostafaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DeannaMostafaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeannaMostafaPage />)
    }).not.toThrow()
  })
})
