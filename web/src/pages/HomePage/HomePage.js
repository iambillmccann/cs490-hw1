import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div>
        <p>
          <Link to={routes.billmccann()}>Bill McCann</Link> (use
          ./web/src/pages/BillmccannPage.js as an example )
          <br />
          <Link to={routes.melvinacademia()}> Melvin Academia</Link>
          <br />
          <Link to={routes.sergioacevedo()}> Sergio Acevedo</Link>
          <br />
          <Link to={routes.lazaragoev()}> Lazar Agoev</Link>
          <br />
          <Link to={routes.aleynaaydin()}> Aleyna Aydin</Link>
          <br />
          <Link to={routes.tylerberkman()}> Tyler Berkman</Link>
          <br />
          <Link to={routes.thomasbethea()}> Thomas Bethea</Link>
          <br />
          <Link to={routes.michaelbrzostek()}> Michael Brzostek</Link>
          <br />
          <Link to={routes.haomassimochen()}> Hao Massimo Chen</Link>
          <br />
          <Link to={routes.dilipchitbahal()}> Dilip Chitbahal</Link>
          <br />
          <Link to={routes.michaeldaley()}> Michael Daley</Link>
          <br />
          <Link to={routes.shumsherdhillon()}> Shumsher Dhillon</Link>
          <br />
          <Link to={routes.robertdiasio()}> Robert Diasio</Link>
          <br />
          <Link to={routes.willisdo()}> Willis Do</Link>
          <br />
          <Link to={routes.edendubrovsky()}> Eden Dubrovsky</Link>
          <br />
          <Link to={routes.anthonyfarro()}> Anthony Farro</Link>
          <br />
          <Link to={routes.andrewfouad()}> Andrew Fouad</Link>
          <br />
          <Link to={routes.alecgarbely()}> Alec Garbely</Link>
          <br />
          <Link to={routes.evelyngarciamendoza()}> Evelyn Garcia-Mendoza</Link>
          <br />
          <Link to={routes.timothygurguis()}> Timothy Gurguis</Link>
          <br />
          <Link to={routes.johnhawkins()}> John Hawkins</Link>
          <br />
          <Link to={routes.snehakafle()}> Sneha Kafle</Link>
          <br />
          <Link to={routes.dhruvilkansara()}> Dhruvil Kansara</Link>
          <br />
          <Link to={routes.andykim()}> Andy Kim</Link>
          <br />
          <Link to={routes.alonlerner()}> Alon Lerner</Link>
          <br />
          <Link to={routes.calixonlormilus()}> Calixon Lormilus</Link>
          <br />
          <Link to={routes.sakthivelanmanikanthan()}>
            {' '}
            Sakthivelan Manikanthan
          </Link>
          <br />
          <Link to={routes.brunomota()}> Bruno Mota</Link>
          <br />
          <Link to={routes.zacharymull()}> Zachary Mull</Link>
          <br />
          <Link to={routes.nicolasoberholtzer()}> Nicolas Oberholtzer</Link>
          <br />
          <Link to={routes.raymondotoadese()}> Raymond Otoadese</Link>
          <br />
          <Link to={routes.dhyeypatel()}> Dhyey Patel</Link>
          <br />
          <Link to={routes.purabpatel()}> Purab Patel</Link>
          <br />
          <Link to={routes.rajpatel()}> Raj Patel</Link>
          <br />
          <Link to={routes.villairepierre()}> Villaire Pierre</Link>
          <br />
          <Link to={routes.mohamedrachid()}> Mohamed Rachid</Link>
          <br />
          <Link to={routes.colberoberson()}> Colbe Roberson</Link>
          <br />
          <Link to={routes.neerajseedani()}> Neeraj Seedani</Link>
          <br />
          <Link to={routes.sohamshah()}> Soham Shah</Link>
          <br />
          <Link to={routes.ricardosierra()}> Ricardo Sierra</Link>
          <br />
          <Link to={routes.jaspreetsingh()}> Jaspreet Singh</Link>
          <br />
          <Link to={routes.leonardoulloa()}> Leonardo Ulloa</Link>
          <br />
          <Link to={routes.johannwinter()}> Johann Winter</Link>
          <br />
          <Link to={routes.michaelwong()}> Michael Wong</Link>
          <br />
          <Link to={routes.mehulpatel()}>Mehul Patel</Link>
          <br />
          <Link to={routes.vrajshah()}>Vraj Shah</Link>
          <br />
          <Link to={routes.tumininuogunnaike()}>Tumininu Ogunnaike</Link>
          <br />
        </p>
      </div>
    </>
  )
}

export default HomePage
