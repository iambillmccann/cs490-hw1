import {
  TableContainer,
  Table,
  Tr,
  Td,
  Tbody,
  Center,
  Box,
} from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const SakethLakshmananPage = () => {
  return (
    <Box>
      <MetaTags title="Saketh Lakshmanan" description="Saketh's page" />
      <Center>
        <TableContainer width={600} border={'3px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'Extra Bold'}>NAME:</Td>
                <Td>Saketh Lakshmanan</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'Extra Bold'}>GITHUB ID:</Td>
                <Td>sakethl20</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'Extra Bold'}>DISCORD ID:</Td>
                <Td>sakethl13</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://gifdb.com/images/high/naruto-your-bestfriend-meme-znd7k18lr3pu80m2.webp"
          alt="Naruto wants to be your bestfriend"
        />
      </Center>
    </Box>
  )
}

export default SakethLakshmananPage
