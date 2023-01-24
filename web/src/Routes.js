import { Router, Route, Set } from '@redwoodjs/router'

// eslint-disable-next-line no-unused-vars

import Hw1Layout from './layouts/Hw1Layout/Hw1Layout'

const Routes = () => {
  return (
    <Router>      
      <Route path="/namitha-yalla" page={NamithaYallaPage} name="namithaYalla" />      
      <Set wrap={Hw1Layout}>
        <Route path="/akashdeepsingh" page={AkashdeepsinghPage} name="akashdeepsingh" />
        <Route path="/kellyannegeorge" page={KellyannegeorgePage} name="kellyannegeorge" />
        <Route path="/steven-kyritsis" page={StevenKyritsisPage} name="stevenKyritsis" />
        <Route path="/sean-ulep" page={SeanUlepPage} name="seanUlep" />
        <Route path="/kevyn" page={KevynPage} name="kevyn" />
        <Route path="/dhyey-kansagara" page={DhyeyKansagaraPage} name="dhyeyKansagara" />
        <Route path="/thomas-lanzetti" page={ThomasLanzettiPage} name="thomasLanzetti" />
        <Route path="/ryanmccusker" page={RyanmccuskerPage} name="ryanmccusker" />
        <Route path="/gabrielpascual" page={GabrielpascualPage} name="gabrielpascual" />
        <Route path="/mehakmaqsood" page={MehakmaqsoodPage} name="mehakmaqsood" />
        <Route path="/mateamilloshi" page={MateamilloshiPage} name="mateamilloshi" />
        <Route path="/pedropacheco" page={PedropachecoPage} name="pedropacheco" />
        <Route path="/erik-chodaba" page={ErikChodabaPage} name="erikchodaba" />
        <Route path="/nehashirwalker" page={NehashirwalkerPage} name="nehashirwalker" />
        <Route path="/deanna-mostafa" page={DeannaMostafaPage} name="deannamostafa" />
        <Route path="/ritikasuresh" page={RitikasureshPage} name="ritikasuresh" />
        <Route path="/saketh-lakshmanan" page={SakethLakshmananPage} name="sakethlakshmanan" />
        <Route path="/safiullah-baig" page={SafiullahBaigPage} name="safiullahbaig" />
        <Route path="/saivedagiri" page={SaivedagiriPage} name="saivedagiri" />
        <Route path="/tom-ehrola" page={TomEhrolaPage} name="tomEhrola" />
        <Route path="/jaspreetsingh" page={JaspreetSinghPage} name="jaspreetsingh" />
        <Route path="/keyadhruve" page={KeyadhruvePage} name="keyadhruve" />
        <Route path="/crismolina" page={CrismolinaPage} name="crismolina" />
        <Route path="/shriya-shah" page={ShriyaShahPage} name="shriyaShah" />
        <Route path="/billmccann" page={BillmccannPage} name="billmccann" />
        <Route path="/manthanpatel" page={ManthanpatelPage} name="manthanpatel" />
        <Route path="/arijqureshi" page={ArijqureshiPage} name="arijqureshi" />
        <Route path="/jillianjacinto" page={JillianjacintoPage} name="jillianjacinto" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
