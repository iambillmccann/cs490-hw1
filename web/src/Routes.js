import { Router, Route, Set } from '@redwoodjs/router'

import Hw1Layout from './layouts/Hw1Layout/Hw1Layout'

const Routes = () => {
  const getRoute = () => {
    return <Route path="/billmccann" page={BillmccannPage} name="billmccann" />
  }
  return (
    <Router>
      <Set wrap={Hw1Layout}>
        {getRoute()}
        <Route path="/" page={HomePage} name="home" />
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
