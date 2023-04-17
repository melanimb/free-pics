/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import BlurImage from '../components/GalleryContainer'

describe('App', () => {
  describe('BlurImage', () => {
    it('renders', () => {
      render(
        <BlurImage />
      )
    })
  })
})
