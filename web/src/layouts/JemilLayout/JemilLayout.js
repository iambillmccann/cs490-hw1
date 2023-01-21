import { Box } from '@chakra-ui/react'

import Header from 'src/components/Header/Header'

const JemilLayout = ({ children }) =>
{
  return(
    <>
      <Header>
      <Box m={25}>
      </Box>
      </Header>
      <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b ">
          {children}
      </main>
    </>
  )
}
export default JemilLayout
//new layout jemil srejic