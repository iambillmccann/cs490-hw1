import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const ManthanpatelPage = () => {
  return (
    <box>
      <MetaTags title="Manthan Patel" descriptxqion="Manthan's page" />
      <Center>
        <TableContainer width={600} border={'2px'}>
          <Table variant="striped" colorScheme="gray">
            <Tbody>
              <Tr>
                <Td fontWeight={'bolder'} color="Highlight">
                  My Name:
                </Td>
                <Td>Manthan Patel</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'} color="Highlight">
                  My GitHub Id:
                </Td>
                <Td>manthan2905</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'} color="Highlight">
                  My Discord Id:
                </Td>
                <Td>anonymoususer</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img src="https://i.redd.it/9q234nru0p481.jpg" alt="Stock Market LOL" />
      </Center>
    </box>
  )
}

export default ManthanpatelPage
