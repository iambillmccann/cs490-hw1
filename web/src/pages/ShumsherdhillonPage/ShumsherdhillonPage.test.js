import { render } from '@redwoodjs/testing/web'

import ShumsherdhillonPage from './ShumsherdhillonPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ShumsherdhillonPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShumsherdhillonPage />)
    }).not.toThrow()
  })
})
