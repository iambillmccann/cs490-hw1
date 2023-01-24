import { Router, Route, Set } from '@redwoodjs/router'

import Hw1Layout from './layouts/Hw1Layout/Hw1Layout'
import GabrielaAcevedoPage from './pages/GabrielaAcevedoPage/GabrielaAcevedoPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={Hw1Layout}>
        <Route path="/ga288" page={GabrielaAcevedoPage} name="ga288" />
        <Route path="/billmccann" page={BillmccannPage} name="billmccann" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
