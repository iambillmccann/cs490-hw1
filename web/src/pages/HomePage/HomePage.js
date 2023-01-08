import { Box, Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const getLink = () => {
    return <Link to={routes.billmccann()}>Bill McCann</Link>
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Box>
        <Text>
          {getLink()} (use ./web/src/pages/BillmccannPage.js as an example )
        </Text>
      </Box>
    </>
  )
}

export default HomePage
