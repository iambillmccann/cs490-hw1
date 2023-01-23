import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const ThomasLanzettiPage = () => {
  return (
    <box>
      <MetaTags title="Thomas Lanzetti" description="Tom's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Thomas Lanzetti</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>TomLanzetti</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>Kyy#5233 (Tom: server nickname)</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media.giphy.com/media/JVGLHEuzbVviw/giphy.gif"
          alt="Boo"
        />
      </Center>
    </box>
  )
}

export default ThomasLanzettiPage
