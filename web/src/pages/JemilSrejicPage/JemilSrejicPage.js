import { Box, Center, TableContainer, Table, Tr, Td, Tbody} from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const JemilSrejicPage = () => {
  return (
    <>
    <MetaTags title='Jemils page' description='Jemil page'/>
    <Center backgroundColor={'green.200'}>
    <TableContainer width={600} border={'1px'} >
          <Table variant="simple" backgroundColor={'white'}>
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Jemil Srejic</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>Js791 or <a href="https://github.com/Js791">https://github.com/Js791</a>(click link)</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>Dzemil#3067</Td>
              </Tr>
            </Tbody>
          </Table>
    </TableContainer>
    </Center>
    <Center backgroundColor={'green.200'}>
        <Box backgroundColor={'black'}>
          <iframe src="https://giphy.com/embed/Ogak8XuKHLs6PYcqlp" width="600" height="600" allowFullScreen></iframe>
        </Box>
    </Center>
    </>
  )
}

export default JemilSrejicPage
