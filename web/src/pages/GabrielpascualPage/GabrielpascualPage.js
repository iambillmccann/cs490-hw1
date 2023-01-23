import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const GabrielpascualPage = () => {
  return (
    <box>
      <MetaTags title="Gabriel Pascual" description="Gabriel's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Gabriel Pascual</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>gabrielpnjit</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>Zacky#0001</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://cdn.discordapp.com/attachments/689908352079495221/1066843773205753856/ckptnaso6cda1.jpg"
          alt="Spongebob programming meme!"
        />
      </Center>
    </box>
  )
}

export default GabrielpascualPage