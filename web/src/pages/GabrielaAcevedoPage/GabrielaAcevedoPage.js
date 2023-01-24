import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const GabrielaAcevedoPage = () => {
  return (
    <box>
      <MetaTags title="Gabriela Acevedo" description="Gabriela's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Gabriela Acevedo</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>ga288</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>gabiace13</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <iframe
          width={500}
          height={500}
          src="https://giphy.com/embed/nuufztgCvyJZIuSkgd/video"
          title="Cat Typing"
        ></iframe>
      </Center>
    </box>
  )
}

export default GabrielaAcevedoPage
