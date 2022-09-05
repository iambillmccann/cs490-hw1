import { Link, routes } from '@redwoodjs/router'

const Hw1Layout = ({ children }) => {
  return (
    <>
      <div className="basicContent">
        <header>
          <h1>
            <Link to={routes.home()}>CS 490 Homework #1</Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="basicContent">{children}</main>
      </div>
    </>
  )
}

export default Hw1Layout
