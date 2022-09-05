import { render } from '@redwoodjs/testing/web'

import MelvinacademiaPage from './MelvinacademiaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MelvinacademiaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MelvinacademiaPage />)
    }).not.toThrow()
  })
})
