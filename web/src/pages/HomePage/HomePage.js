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
          <Link to={routes.arijqureshi()}>arijqureshi</Link>
          <br />
          <Link to={routes.billmccann()}>billmccann</Link>
          <br />
          <Link to={routes.manthanpatel()}>manthanpatel</Link>
          <br />
          <Link to={routes.crismolina()}>crismolina</Link>
          <br />
          <Link to={routes.deannamostafa()}>deannamostafa</Link>
          <br />
          <Link to={routes.erikchodaba()}>erikchodaba</Link>
          <br />
          <Link to={routes.gabrielpascual()}>gabrielpascual</Link>
          <br />
          <Link to={routes.jaspreetsingh()}>jaspreetsingh</Link>
          <br />
          <Link to={routes.keyadhruve()}>keyadhruve</Link>
          <br />
          <Link to={routes.mateamilloshi()}>mateamilloshi</Link>
          <br />
          <Link to={routes.mehakmaqsood()}>mehakmaqsood</Link>
          <br />
          <Link to={routes.nehashirwalker()}>nehashirwalker</Link>
          <br />
          <Link to={routes.pedropacheco()}>pedropacheco</Link>
          <br />
          <Link to={routes.ritikasuresh()}>ritikasuresh</Link>
          <br />
          <Link to={routes.safiullahbaig()}>safiullahbaig</Link>
          <br />
          <Link to={routes.saivedagiri()}>saivedagiri</Link>
          <br />
          <Link to={routes.sakethlakshmanan()}>sakethlakshmanan</Link>
          <br />
          <Link to={routes.manthanpatel()}>manthanpatel</Link>
          <br />
          {/* End */}
        </Text>
      </Box>
    </>
  )
}

export default HomePage
