import { render } from '@redwoodjs/testing/web'

import RaymondotoadesePage from './RaymondotoadesePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RaymondotoadesePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RaymondotoadesePage />)
    }).not.toThrow()
  })
})
