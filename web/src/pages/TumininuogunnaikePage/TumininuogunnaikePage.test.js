import { render } from '@redwoodjs/testing/web'

import TumininuogunnaikePage from './TumininuogunnaikePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TumininuogunnaikePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TumininuogunnaikePage />)
    }).not.toThrow()
  })
})
