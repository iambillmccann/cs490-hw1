import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
