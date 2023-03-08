import { routes } from 'models'
import { Navigator } from 'components'
import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <header>
          <Navigator
            pathNames={[routes.HOME, routes.ABOUT_US, routes.CONTACT_US]}
          />
        </header>
        {children}
      </body>
    </html>
  )
}
