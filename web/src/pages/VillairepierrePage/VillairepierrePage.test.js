import { render } from '@redwoodjs/testing/web'

import VillairepierrePage from './VillairepierrePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VillairepierrePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VillairepierrePage />)
    }).not.toThrow()
  })
})
