import { Router, Route, Set } from '@redwoodjs/router'

// eslint-disable-next-line no-unused-vars

import Hw1Layout from './layouts/Hw1Layout/Hw1Layout'
import JemilLayout from './layouts/JemilLayout/JemilLayout'
import GabrielaAcevedoPage from './pages/GabrielaAcevedoPage/GabrielaAcevedoPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={Hw1Layout}>
        <Route path="/ak" page={AKPage} name="ak" />
        <Route path="/namitha-yalla" page={NamithaYallaPage} name="namithayalla" />
        <Route path="/ga288" page={GabrielaAcevedoPage} name="ga288" />
        <Route path="/dhyey" page={DhyeyPage} name="dhyey" />
        <Route path="/riyadesai" page={RiyadesaiPage} name="riyadesai" />
        <Route path="/elimojica" page={ElimojicaPage} name="elimojica" />
        <Route path="/mvd29" page={Mvd29Page} name="mvd29" />
        <Route path="/akashdeepsingh" page={AkashdeepsinghPage} name="akashdeepsingh" />
        <Route path="/kellyannegeorge" page={KellyannegeorgePage} name="kellyannegeorge" />
        <Route path="/steven-kyritsis" page={StevenKyritsisPage} name="stevenkyritsis" />
        <Route path="/sean-ulep" page={SeanUlepPage} name="seanulep" />
        <Route path="/kevyn" page={KevynPage} name="kevyn" />
        <Route path="/dhyey-kansagara" page={DhyeyKansagaraPage} name="dhyeykansagara" />
        <Route path="/thomas-lanzetti" page={ThomasLanzettiPage} name="thomaslanzetti" />
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
        <Route path="/tom-ehrola" page={TomEhrolaPage} name="tomehrola" />
        <Route path="/jaspreetsingh" page={JaspreetSinghPage} name="jaspreetsingh" />
        <Route path="/keyadhruve" page={KeyadhruvePage} name="keyadhruve" />
        <Route path="/crismolina" page={CrismolinaPage} name="crismolina" />
        <Route path="/murtajizkazmi" page={MurtajizkazmiPage} name="murtajizkazmi" />
        <Route path="/shriya-shah" page={ShriyaShahPage} name="shriyashah" />
        <Route path="/billmccann" page={BillmccannPage} name="billmccann" />
        <Route path="/manthanpatel" page={ManthanpatelPage} name="manthanpatel" />
        <Route path="/arijqureshi" page={ArijqureshiPage} name="arijqureshi" />
        <Route path="/jillianjacinto" page={JillianjacintoPage} name="jillianjacinto" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/home" page={HomePage} name="home" />
        <Route path="/neelpatil" page={NeelpatilPage} name="neelpatil" />
      </Set>
      <Set wrap={JemilLayout}>
        <Route path="/jemilsrejic" page={JemilSrejicPage} name="jemilsrejic" />
      </Set>
      <Set wrap={Hw1Layout}>
        <Route path="/casey" page={CaseyPage} name="casey" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
} //added route jemil srejic

export default Routes
