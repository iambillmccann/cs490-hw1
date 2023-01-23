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
          <Link to={routes.billmccann()}>billmccann</Link>
          <Link to={routes.crismolina()}>crismolina</Link>
          <Link to={routes.deannamostafa()}>deannamostafa</Link>
          <Link to={routes.erikchodaba()}>erikchodaba</Link>
          <Link to={routes.gabrielpascual()}>gabrielpascual</Link>
          <Link to={routes.jaspreetsingh()}>jaspreetsingh</Link>
          <Link to={routes.johndoe()}>johndoe</Link>
          <Link to={routes.keyadhruve()}>keyadhruve</Link>
          <Link to={routes.mateamilloshi()}>mateamilloshi</Link>
          <Link to={routes.mehakmaqsood()}>mehakmaqsood</Link>
          <Link to={routes.nehashirwalker()}>nehashirwalker</Link>
          <Link to={routes.pedropacheco()}>pedropacheco</Link>
          <Link to={routes.ritikasuresh()}>ritikasuresh</Link>
          <Link to={routes.safiullahbaig()}>safiullahbaig</Link>
          <Link to={routes.saivedagiri()}>saivedagiri</Link>
          <Link to={routes.sakethlakshmanan()}>sakethlakshmanan</Link>
          {/* End */}
        </Text>
      </Box>
    </>
  )
}

export default HomePage

