import { Router, Route, Set } from '@redwoodjs/router'

import Hw1Layout from './layouts/Hw1Layout/Hw1Layout'
import JemilLayout from './layouts/JemilLayout/JemilLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={Hw1Layout}>
        <Route path="/billmccann" page={BillmccannPage} name="billmccann" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/home" page={HomePage} name="home" />
      </Set>
       <Set wrap={JemilLayout}>
        <Route path="/jemil-srejic" page={JemilSrejicPage} name="jemil-srejic" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
