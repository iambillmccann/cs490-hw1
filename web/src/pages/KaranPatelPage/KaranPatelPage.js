import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const KaranpatelPage = () => {
  return (
    <box>
      <MetaTags title="Karan Patel" description="Karan's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'italic'}>My Name:</Td>
                <Td>Karan Patel</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'italic'}>My GitHub Id:</Td>
                <Td>karanpatel2002</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'italic'}>My Discord Id:</Td>
                <Td>KaranPatel</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media.giphy.com/media/ze1DcYRbgGAEM/giphy.gif"
          alt="Good Night Peeps"
        />
      </Center>
    </box>
  )
}

export default KaranpatelPage
