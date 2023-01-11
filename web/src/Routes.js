import { Router, Route, Set } from '@redwoodjs/router'

import Hw1Layout from './layouts/Hw1Layout/Hw1Layout'

const Routes = () => {
  return (
    <Router>
      <Route path="/test2" page={Test2Page} name="test2" />
      <Set wrap={Hw1Layout}>
        <Route path="/billmccann" page={BillmccannPage} name="billmccann" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
