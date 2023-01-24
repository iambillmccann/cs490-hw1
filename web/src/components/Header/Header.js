import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'

import { routes, Link } from '@redwoodjs/router'

const Header = () => {
  return (
    <Flex minWidth={'max-content'} alignItems="center" gap="2" bg="black" color="white">
      <Box p={4}>
        <Heading color="white" fontSize="3xl" fontWeight={'normal'}>
         CS 490
        </Heading>
      </Box>
      <Spacer />
      <Box p={4} color={'whiteAlpha.900'} fontWeight={'thin'}>
        <Link to={routes.home()}>Home</Link>
      </Box>
    </Flex>
  )

}
//commit changes
export default Header
