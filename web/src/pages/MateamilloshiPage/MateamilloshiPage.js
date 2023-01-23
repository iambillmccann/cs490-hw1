import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'

const MateamilloshiPage = () => {
  return (
    <box>
    <MetaTags title="Matea Milloshi" description="Matea's page" />
    <Center>
      <TableContainer width={480} border={'1px'}>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td fontWeight={'bold'}>My Name:</Td>
              <Td>Matea Milloshi</Td>
            </Tr>
            <Tr>
              <Td fontWeight={'bold'}>My GitHub Id:</Td>
              <Td>mateamilloshi</Td>
            </Tr>
            <Tr>
              <Td fontWeight={'bold'}>My Discord Id:</Td>
              <Td>matea</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
    <br />
    <Center>
      <img
        src="https://media.giphy.com/media/D0RvPABUNF3AQ/giphy.gif"
        alt="Squidward meme"
      />
    </Center>
  </box>

  )
}

export default MateamilloshiPage
