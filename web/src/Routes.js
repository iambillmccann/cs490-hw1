import { Router, Route, Set } from '@redwoodjs/router'

import PostsLayout from 'src/layouts/PostsLayout'

import Hw1Layout from './layouts/Hw1Layout/Hw1Layout'

const Routes = () => {
  return (
    <Router>
      <Route path="/gabrielpascual" page={GabrielpascualPage} name="gabrielpascual" />
      <Set wrap={Hw1Layout}>
        <Route path="/mehakmaqsood" page={MehakmaqsoodPage} name="mehakmaqsood" />
      <Route path="/mateamilloshi" page={MateamilloshiPage} name="mateamilloshi" />
        <Route path="/pedropacheco" page={PedropachecoPage} name="pedropacheco" />
        <Route path="/erik-chodaba" page={ErikChodabaPage} name="erikChodaba" />
        <Route path="/nehashirwalker" page={NehashirwalkerPage} name="nehashirwalker" />
        <Route path="/deanna-mostafa" page={DeannaMostafaPage} name="deannaMostafa" />
        <Route path="/ritikasuresh" page={RitikasureshPage} name="ritikasuresh" />
        <Route path="/saketh-lakshmanan" page={SakethLakshmananPage} name="sakethLakshmanan" />
        <Route path="/safiullah-baig" page={SafiullahBaigPage} name="safiullahBaig" />
        <Route path="/saivedagiri" page={SaivedagiriPage} name="saivedagiri" />
        <Route path="/jaspreetsingh" page={JaspreetSinghPage} name="jaspreetsingh" />
        <Route path="/keyadhruve" page={KeyadhruvePage} name="keyadhruve" />
        <Route path="/crismolina" page={CrismolinaPage} name="crismolina" />
        <Route path="/billmccann" page={BillmccannPage} name="billmccann" />
        <Route path="/manthanpatel" page={ManthanpatelPage} name="manthanpatel" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
