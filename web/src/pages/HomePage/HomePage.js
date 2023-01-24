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
          <Link to={routes.ga288()}>gabrielaacevedo</Link>
          <Link to={routes.billmccann()}>billmccann</Link>
          {/* End */}
        </Text>
      </Box>
    </>
  )
}

export default HomePage
