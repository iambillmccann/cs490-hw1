import { Router, Route, Set } from '@redwoodjs/router'

import Hw1Layout from './layouts/Hw1Layout/Hw1Layout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={Hw1Layout}>
        <Route path="/michaelwong" page={MichaelwongPage} name="michaelwong" />
        <Route path="/johannwinter" page={JohannwinterPage} name="johannwinter" />
        <Route path="/leonardoulloa" page={LeonardoulloaPage} name="leonardoulloa" />
        <Route path="/jaspreetsingh" page={JaspreetsinghPage} name="jaspreetsingh" />
        <Route path="/ricardosierra" page={RicardosierraPage} name="ricardosierra" />
        <Route path="/sohamshah" page={SohamshahPage} name="sohamshah" />
        <Route path="/neerajseedani" page={NeerajseedaniPage} name="neerajseedani" />
        <Route path="/colberoberson" page={ColberobersonPage} name="colberoberson" />
        <Route path="/mohamedrachid" page={MohamedrachidPage} name="mohamedrachid" />
        <Route path="/villairepierre" page={VillairepierrePage} name="villairepierre" />
        <Route path="/rajpatel" page={RajpatelPage} name="rajpatel" />
        <Route path="/purabpatel" page={PurabpatelPage} name="purabpatel" />
        <Route path="/dhyeypatel" page={DhyeypatelPage} name="dhyeypatel" />
        <Route path="/raymondotoadese" page={RaymondotoadesePage} name="raymondotoadese" />
        <Route path="/nicolasoberholtzer" page={NicolasoberholtzerPage} name="nicolasoberholtzer" />
        <Route path="/zacharymull" page={ZacharymullPage} name="zacharymull" />
        <Route path="/brunomota" page={BrunomotaPage} name="brunomota" />
        <Route path="/sakthivelanmanikanthan" page={SakthivelanmanikanthanPage} name="sakthivelanmanikanthan" />
        <Route path="/calixonlormilus" page={CalixonlormilusPage} name="calixonlormilus" />
        <Route path="/alonlerner" page={AlonlernerPage} name="alonlerner" />
        <Route path="/andykim" page={AndykimPage} name="andykim" />
        <Route path="/dhruvilkansara" page={DhruvilkansaraPage} name="dhruvilkansara" />
        <Route path="/snehakafle" page={SnehakaflePage} name="snehakafle" />
        <Route path="/johnhawkins" page={JohnhawkinsPage} name="johnhawkins" />
        <Route path="/timothygurguis" page={TimothygurguisPage} name="timothygurguis" />
        <Route path="/evelyngarcia-mendoza" page={EvelyngarciaMendozaPage} name="evelyngarciamendoza" />
        <Route path="/alecgarbely" page={AlecgarbelyPage} name="alecgarbely" />
        <Route path="/andrewfouad" page={AndrewfouadPage} name="andrewfouad" />
        <Route path="/anthonyfarro" page={AnthonyfarroPage} name="anthonyfarro" />
        <Route path="/edendubrovsky" page={EdendubrovskyPage} name="edendubrovsky" />
        <Route path="/willisdo" page={WillisdoPage} name="willisdo" />
        <Route path="/robertdiasio" page={RobertdiasioPage} name="robertdiasio" />
        <Route path="/shumsherdhillon" page={ShumsherdhillonPage} name="shumsherdhillon" />
        <Route path="/michaeldaley" page={MichaeldaleyPage} name="michaeldaley" />
        <Route path="/dilipchitbahal" page={DilipchitbahalPage} name="dilipchitbahal" />
        <Route path="/hao-massimochen" page={HaoMassimochenPage} name="haomassimochen" />
        <Route path="/michaelbrzostek" page={MichaelbrzostekPage} name="michaelbrzostek" />
        <Route path="/thomasbethea" page={ThomasbetheaPage} name="thomasbethea" />
        <Route path="/tylerberkman" page={TylerberkmanPage} name="tylerberkman" />
        <Route path="/aleynaaydin" page={AleynaaydinPage} name="aleynaaydin" />
        <Route path="/lazaragoev" page={LazaragoevPage} name="lazaragoev" />
        <Route path="/sergioacevedo" page={SergioacevedoPage} name="sergioacevedo" />
        <Route path="/melvinacademia" page={MelvinacademiaPage} name="melvinacademia" />
        <Route path="/billmccann" page={BillmccannPage} name="billmccann" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
