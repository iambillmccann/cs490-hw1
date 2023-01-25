import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const ShivPatelPage = () => {
  return (
    <box>
      <MetaTags title="ShivPatel" description="ShivPatel page" />
      <Center>
        <TableContainer width={600} border={'2px'}>
          <Table variant="striped" colorScheme="gray">
            <Tbody>
              <Tr>
                <Td fontWeight={'bolder'}>My Name:</Td>
                <Td>Shiv Patel</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>shiv9224</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>shiv#2413</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://i.redd.it/ml088rf7dhu21.jpg"
          alt="Brain brain Enlightenment"
        />
      </Center>
    </box>
  )
}

export default ShivPatelPage
