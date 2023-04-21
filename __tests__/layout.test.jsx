/* eslint-disable no-undef */

import { screen, render, cleanup } from '@testing-library/react'
import Layout from '../app/layout'

describe('Layout', () => {
  afterEach(cleanup)
  afterEach(jest.clearAllMocks)

  beforeEach(() => {
    render(<Layout />)
  })

  it('should be anchor', () => {
    expect(screen.getByRole('link', { name: /Home/i })).toBeTruthy()
    screen.debug()
  })
})
