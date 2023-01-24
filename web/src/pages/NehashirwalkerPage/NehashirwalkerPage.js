import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const NehashirwalkerPage = () => {
  return (
    <box>
      <MetaTags title="Neha Shirwalker" description="Neha's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Neha Shirwalker</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>nps38</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>Nehaaaaaaa</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://i.redd.it/tsbklkd4ool41.jpg"
          alt="Spongebob rips his pants"
        />
      </Center>
    </box>
  )
}

export default NehashirwalkerPage
