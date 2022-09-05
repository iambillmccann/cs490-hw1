import { render } from '@redwoodjs/testing/web'

import ColberobersonPage from './ColberobersonPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ColberobersonPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ColberobersonPage />)
    }).not.toThrow()
  })
})
