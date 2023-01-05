import { Box } from '@chakra-ui/react'

import Banner from 'src/components/Banner/Banner'

const Hw1Layout = ({ children }) => {
  return (
    <>
      <Banner />
      <Box m={25}>
        <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
          {children}
        </main>
      </Box>
    </>
  )
}

export default Hw1Layout
