import { render } from '@redwoodjs/testing/web'

import HarshilkumarkikaniPage from './HarshilkumarkikaniPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HarshilkumarkikaniPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HarshilkumarkikaniPage />)
    }).not.toThrow()
  })
})
