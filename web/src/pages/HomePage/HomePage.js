import { Box, Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Box>
        <Text>
          {/* Start */}
          <Link to={routes.akashdeepsingh()}>akashdeepsingh</Link>
          <br />
          <Link to={routes.arijqureshi()}>arijqureshi</Link>
          <br />
          <Link to={routes.billmccann()}>billmccann</Link>
          <br />
          <Link to={routes.crismolina()}>crismolina</Link>
          <br />
          <Link to={routes.deannamostafa()}>deannamostafa</Link>
          <br />
          <Link to={routes.dhyeykansagara()}>dhyeykansagara</Link>
          <br />
          <Link to={routes.dhyey()}>dhyey</Link>
          <br />
          <Link to={routes.elimojica()}>elimojica</Link>
          <br />
          <Link to={routes.erikchodaba()}>erikchodaba</Link>
          <br />
          <Link to={routes.ga288()}>gabrielaacevedo</Link>
          <br />
          <Link to={routes.gabrielpascual()}>gabrielpascual</Link>
          <br />
          <Link to={routes.jaspreetsingh()}>jaspreetsingh</Link>
          <br />
          <Link to={routes.jemilsrejic()}>jemilsrejic</Link>
          <br />
          <Link to={routes.jillianjacinto()}>jillianjacinto</Link>
          <br />
          <Link to={routes.kellyannegeorge()}>kellyannegeorge</Link>
          <br />
          <Link to={routes.kevyn()}>kevyn</Link>
          <br />
          <Link to={routes.keyadhruve()}>keyadhruve</Link>
          <br />
          <Link to={routes.manthanpatel()}>manthanpatel</Link>
          <br />
          <Link to={routes.mateamilloshi()}>mateamilloshi</Link>
          <br />
          <Link to={routes.mehakmaqsood()}>mehakmaqsood</Link>
          <br />
          <Link to={routes.murtajizkazmi()}>murtajizkazmi</Link>
          <br />
          <Link to={routes.mvd29()}>mvd29</Link>
          <br />
          <Link to={routes.namithayalla()}>namithayalla</Link>
          <br />
          <Link to={routes.neelpatil()}>neelpatil</Link>
          <br />
          <Link to={routes.nehashirwalker()}>nehashirwalker</Link>
          <br />
          <Link to={routes.pedropacheco()}>pedropacheco</Link>
          <br />
          <Link to={routes.ritikasuresh()}>ritikasuresh</Link>
          <br />
          <Link to={routes.riyadesai()}>riyadesai</Link>
          <br />
          <Link to={routes.ryanmccusker()}>ryanmccusker</Link>
          <br />
          <Link to={routes.safiullahbaig()}>safiullahbaig</Link>
          <br />
          <Link to={routes.saivedagiri()}>saivedagiri</Link>
          <br />
          <Link to={routes.sakethlakshmanan()}>sakethlakshmanan</Link>
          <br />
          <Link to={routes.seanulep()}>seanulep</Link>
          <br />
          <Link to={routes.shriyashah()}>shriyashah</Link>
          <br />
          <Link to={routes.stevenkyritsis()}>stevenkyritsis</Link>
          <br />
          <Link to={routes.thomaslanzetti()}>thomaslanzetti</Link>
          <br />
          <Link to={routes.tomehrola()}>tomehrola</Link>
          <br />
          {/* End */}
        </Text>
      </Box>
    </>
  )
}

export default HomePage
