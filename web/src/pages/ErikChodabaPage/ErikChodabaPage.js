import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const ErikChodabaPage = () => {
  return (
    <box>
      <MetaTags title="Erik Chodaba" description="Erik's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Erik Chodaba</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>EchoErik</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>EchoErik#5138</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://cdn.discordapp.com/emojis/759606356700561509.gif?size=MAX&quality=lossless"
          alt=":BIGCAT:"
        />
      </Center>
    </box>
  )
}
export default ErikChodabaPage
